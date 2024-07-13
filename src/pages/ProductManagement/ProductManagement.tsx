import AddModal from "@/components/AddModal/AddModal";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "@/redux/api/baseApi";
import { TProduct } from "@/types";

const ProductManagement = () => {
  const [removeProduct] = useRemoveProductMutation();
  const url = "/products";
  const { data: products, isLoading } = useGetProductsQuery(url);

  if (isLoading)
    return (
      <p className="text-3xl text-center text-primary-gradient my-2 font-bold">
        Loading....
      </p>
    );
    const filteredProducts = products?.data?.filter((product: TProduct) => !product.isDeleted);
  const handleDelete = (id: string) => {
  
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this product!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      removeProduct(id);
      Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
    }
  });
};
  return (
    <section className="container mx-auto">
      <SectionTitle title="Manage Products"></SectionTitle>
      <div>
      <AddModal></AddModal>
        <Table className="my-2">
          
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Image</TableHead>
              <TableHead className="w-[120px]">Name</TableHead>
              <TableHead className="w-[120px]">Catgeory</TableHead>
              <TableHead className="w-[120px]">Price</TableHead>
              <TableHead className="w-[120px]">Stock</TableHead>

              <TableHead className="w-[120px]">Update</TableHead>
              <TableHead className="w-[120px]">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts?.map((product: TProduct) => (
              <TableRow key={product?._id}>
                <TableCell imageSrc={`${product.image}`}></TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stockQuantity}</TableCell>
                <TableCell><Button>Update</Button></TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(product?._id)}
                    variant={"destructive"}
                    size={"sm"}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ProductManagement;
