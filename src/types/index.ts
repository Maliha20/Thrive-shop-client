export type TProduct = {
  _id: string,
  name?: string,
  price?: number,
  category?: string,
  description?: string,
  stockQuantity?: number,
  image?: string,
  isDeleted?: boolean
}


export type TInititalState = {
  items: TCartItem[]
}

export type TCartItem = {
  id: string;
  name: string;
  price: number;
  itemQuantity: number;
  image: string;
  category: string;
  stockQuantity: number;
}