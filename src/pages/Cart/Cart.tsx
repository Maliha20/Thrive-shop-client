import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/redux/features/CartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleRemoveItems = (id: string) => {
    dispatch(removeItem(id));
  };
  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        const message = "You have items in your cart. Are you sure you want to leave?";
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);
  return (
    <section className="mx-auto container my-10">
      <SectionTitle title="Shopping Cart"></SectionTitle>
      {cartItems.length === 0 ? (
        
         
        
        <div className="text-center">
          <p className="text-2xl font-bold my-5">Your Cart is Empty</p>
          <Link to="/products">
            <Button size={"responsive"} variant={"default"}>
              Want to Shop?
            </Button>
          </Link>
         
        </div>
      ) : (
        <div>
          <Table>
            <thead>
              <tr>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Increase</TableCell>
                <TableCell>Decrease</TableCell>
                <TableCell>Delete</TableCell>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.itemQuantity}</TableCell>
                  <TableCell>
                    <Button variant={"ghost"} onClick={() => handleIncrease(item.id)} size={"sm"}>
                      <Plus></Plus>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant={"ghost"} onClick={() => handleDecrease(item.id)} size={"sm"}>
                      <Minus></Minus>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button size={"responsive"} variant={"ghost"} onClick={() => handleRemoveItems(item.id)}>
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
             
            </tbody>
           
          </Table>
          <div className="flex justify-between items-center mt-4 space-x-6 lg:pr-32">
            <p className="text-lg font-semibold"><span className="text-blue-500">Total Price: </span>{cartItems.reduce((total, item) => total + item.price * item.itemQuantity, 0).toFixed(2)}</p>
        <Link to="/checkout"><Button disabled={cartItems.length === 0}>Checkout</Button></Link>
      </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
