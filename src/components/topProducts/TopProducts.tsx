import { TProduct } from "@/types";
import ProductCard from "../productCard/ProductCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import { useGetProductsQuery } from "@/redux/api/baseApi";

const TopProducts = () => {
  
const url= '/products'
  
    const { data: products, isLoading } = useGetProductsQuery(url);
    if (isLoading)
      return (
        <p className="text-3xl text-center text-primary-gradient my-2 font-bold">
          Loading....
        </p>
      );
    
    return (
      <div className="container mx-auto my-10 ">
        <SectionTitle title="Top Products"></SectionTitle>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mx-auto my-5 ">
          {products?.data?.slice(0,3).map((product: TProduct) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    );
  };
export default TopProducts;