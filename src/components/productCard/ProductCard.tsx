import { TProduct } from "@/types";
import { Button } from "../ui/button";
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { name, price, category, image } = product;
  return (
   <motion.div 
   initial ={{scale: 0}}
   whileInView={{ scale: 1}}
   transition={{ ease: "easeInOut", duration: 1.35, delay: 0.33 }}
   className="w-full overflow-hidden rounded-xl hover:scale-90 duration-700 shadow-lg hover:shadow-2xl transition-shadow">
     <Card className="w-full p-4 rounded-xl">
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-semibold text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <img className="h-[300px] w-full rounded-t-lg transition-transform duration-500 hover:scale-105" src={image} alt="" />
        </div>
        <div>
         <p className="text-lg font-semibold">Price: $<span className="text-blue-500">{price}</span></p>
         
    </div>
    <div>
      <p className="text-lg font-semibold">Category: <span className="text-blue-500">{category}</span></p>

    </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={`/products/${product?._id}`}>
        <Button className="bg-primary-gradient" variant="outline">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
   </motion.div>
  );
};

export default ProductCard;
