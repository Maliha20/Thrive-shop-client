import { motion } from "framer-motion";
import { useGetProductDetailsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { addItem } from "@/redux/features/CartSlice";

const ProductDetails = () => {
  const dispatch = useAppDispatch();

  const { id: id } = useParams();
  const { data, isLoading } = useGetProductDetailsQuery(id);

  if (isLoading)
    return (
      <p className="text-3xl text-center text-primary-gradient my-2 font-bold">
        Loading....
      </p>
    );
  const { data: product } = data;
 const handleAddtoCart=()=>{
  dispatch(addItem({
    id: product._id,
    name: product.name,
    price: product.price,
    itemQuantity: 1,
    image: product.image,
    category: product.category,
    stockQuantity: product.stockQuantity, 
  }))
 }
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-5">
        <motion.div
          initial={{ scale: 0, borderRadius: "100px" }}
          whileInView={{ scale: 1, borderRadius: "0.75rem" }}
          transition={{ ease: "easeInOut", duration: 1.35 }}
          className="w-1/2 h-full overflow-hidden rounded-xl group  duration-700"
        >
          <img
            className="w-full h-full object-cover duration-1000"
            src={product?.image}
            alt=""
          />
        </motion.div>
        <div className="w-1/2">
          <motion.h2
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-2xl md:text-4xl text-blue-500 font-bold text-center lg:text-center uppercase m-10"
          >
            {product?.name}
          </motion.h2>
          <p className="text-xl font-semibold text-center lg:text-justify">
            <span className="text-blue-500">Details:</span> {product?.description}
          </p>
          <p className="text-lg font-semibold text-center lg:text-justify">
            <span className=" text-blue-500">Price: </span> ${product?.price}
          </p>
          <p className="text-lg font-semibold text-center lg:text-justify">
           <span className=" text-blue-500"> Category: </span>{product?.category}
          </p>
          <p className="text-lg font-semibold text-center lg:text-justify">
           <span className=" text-blue-500"> Stock-Quantity: </span>{product?.stockQuantity}
          </p>
          <div className="text-center lg:text-justify">
          <Button onClick={handleAddtoCart} className="px-4 py-2 my-4 bg-primary-gradient rounded-lg font-bold hover:text-blue-500">
            Add to cart
          </Button>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default ProductDetails;
