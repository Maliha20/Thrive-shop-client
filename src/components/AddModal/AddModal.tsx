import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAddProductMutation } from "@/redux/api/baseApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddModal = () => {
  const { register, handleSubmit } = useForm();
  const [addProduct] = useAddProductMutation();

  const onSubmit = async (values: FieldValues) => {
    const productDetails = {
        name: values.name,
        price: parseFloat(values.price),
        category: values.category,
        description: values.description,
        stockQuantity: parseInt(values.stockQuantity),
        image: values.image,
        isDeleted: false, 
    };

    try {
      const res = await addProduct(productDetails).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      console.error('Error adding product:', err);
      toast.error("Failed to add product");
    }
  };



  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} size={"sm"}>
          Add a product
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
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              type="text"
              id="image"
              className="col-span-3"
              {...register("image")}
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

export default AddModal;
