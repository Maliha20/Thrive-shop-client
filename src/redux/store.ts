import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import CartReducer from './features/CartSlice'
import {persistReducer, persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persisConfig ={
  key: "cart",
  storage

}

const persistedCartReducer = persistReducer(persisConfig, CartReducer)
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer  ,
    [baseApi.reducerPath] : baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)