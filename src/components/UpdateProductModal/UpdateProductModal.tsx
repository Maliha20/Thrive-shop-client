
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";


type TProductProps = {
  _id: string,
    name: string;
    price: number;
    category: string;
    description: string;
    stockQuantity: number;
  };
 
const UpdateProductModal =( item : TProductProps)  => {
  
  const { register, handleSubmit } = useForm();

  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  if (isLoading)
    return (
      <p className="text-3xl text-center text-primary-gradient my-2 font-bold">
        Loading....
      </p>
    );

  const onSubmit = async (values: FieldValues) => {
    
    const data = {
      _id: item._id,
      name: values.name,
      price: parseFloat(values.price), // Ensure price is a number
      category: values.category,
      description: values.description,
      stockQuantity: parseInt(values.stockQuantity), 
    
      }
      try {
        const res = await updateProduct(data).unwrap();
        if (res?.success) {
          toast.success(res?.message);
        } else {
          toast.error("Failed to update product");
        }
      } catch (err) {
        console.error("Error update product:", err);
        toast.error("Failed to aupdatedd product");
      }
  
    };
    

  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"warn"} size={"sm"}>
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              className="col-span-3"
              {...register("name")}
            />
          </div>
        
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              type="text"
              id="description"
              className="col-span-3"
              {...register("description")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              type="text"
              id="category"
              className="col-span-3"
              {...register("category")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              type="text"
              id="price"
              className="col-span-3"
              {...register("price")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stockQuantity" className="text-right">
              Stock Quantity
            </Label>
            <Input
              type="text"
              id="stockQuantity"
              className="col-span-3"
              {...register("stockQuantity")}
            />
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductModal;
