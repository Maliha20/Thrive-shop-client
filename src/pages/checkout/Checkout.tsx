import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCheckoutMutation } from "@/redux/api/baseApi";
import { updateQuantity } from "@/redux/features/CartSlice";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const [checkout] = useCheckoutMutation();
  const dispatch =useDispatch()
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.itemQuantity,
    0
  ).toFixed(2);


  const onSubmit = async (values: FieldValues) => {
    const checkoutDetails = {
      items: cartItems.map(item => ({
        product: item.id, 
        quantity: item.itemQuantity
      })),
      totalPrice: totalPrice,
      paymentMethod: "cash",
      userInformation: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
      },
    };
   
    try {
      const res = await checkout(checkoutDetails).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        checkoutDetails.items.map(item => {
          console.log(item);
          dispatch(updateQuantity({ id: item.product, stockQuantity: item.quantity }));
        });
      } else {
        toast.error("Failed to place order");
      }
    } catch (err) {
      console.error("Error placing product:", err);
      toast.error("Failed to place order");
    }
  };

  return (
    <section className="mx-auto container my-10">
      <SectionTitle title="Checkout"></SectionTitle>

      <Card className="max-w-md mx-auto p-4 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">
          Order Details
        </h2>
        <div className="text-justify my-5">
          <ul>
            {cartItems.map((item) => (
              <li className="text-lg font-semibold">
                <span className="font-bold mr-3">{item.name}:</span>{" "}
                {item.itemQuantity} * ${item.price} = Total: $
                {(item.itemQuantity * item.price).toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold">
            <span className="text-blue-500">Total Price: </span>$
            {cartItems.reduce(
              (total, item) => total + item.price * item.itemQuantity,
              0
            ).toFixed(2)}
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">
          Provide The Required Details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              type="email"
              id="email"
              {...register("email")}
              //   onChange=""
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Name
            </label>
            <Input
              type="text"
              id="name"
              {...register("name")}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Phone Number
            </label>
            <Input
              type="text"
              id="phone"
              {...register("phone")}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Address
            </label>
            <Input
              type="text"
              id="address"
              {...register("address")}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary-gradient text-bold text-xl py-2 rounded-md"
          >
            Place Order
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default Checkout;
