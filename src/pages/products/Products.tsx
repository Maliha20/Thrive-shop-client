import ProductCard from "@/components/productCard/ProductCard";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const [debouncedSearchTerm] = useDebounce(search, 500)

  let url = "/products";
  const queryParams = [];

  if (debouncedSearchTerm) queryParams.push(`searchTerm=${search}`);
  if (sort) queryParams.push(`sort=${sort}`);
  if (category) queryParams.push(`category=${category}`);

  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }

  const handleClearFilter =()=>{
    setCategory("")
   
  }

  const { data: products, isLoading } = useGetProductsQuery(url);
  if (isLoading)
    return (
      <p className="text-3xl text-center text-primary-gradient my-2 font-bold">
        Loading....
      </p>
    );
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  return (
    <div className="container mx-auto my-10">
      <SectionTitle title="Our Products"></SectionTitle>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-64 py-6  text-center rounded-xl">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border-2 border-blue-300 rounded-md "
            placeholder="search"
          />
        </div>
        <div className="space-x-3">
          <select value={sort} onChange={handleSort}>
            <option value="">Sort By</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>
          <select value={category} onChange={handleFilter}>
            <option value="">Filter By</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Accessories">Accessories</option>
          </select>
          <Button variant={"ghost"} onClick={handleClearFilter}>Clear</Button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5 mx-auto my-5">
        {products?.data?.map((product: TProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
