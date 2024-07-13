import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useAppSelector } from "@/redux/hooks";
import { Dumbbell } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="mx-auto container ">
      <div className="py-2 flex items-center justify-around bg-blue-50 rounded-sm">
        <DropdownMenu>
          <DropdownMenuTrigger className="btn btn-ghost lg:hidden">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><NavLink to="/products">Products</NavLink></DropdownMenuItem>
              <DropdownMenuItem><NavLink to="/product-management">Manage Products</NavLink></DropdownMenuItem>
              <DropdownMenuItem><NavLink to="/cart">Cart</NavLink></DropdownMenuItem>
              <DropdownMenuItem><NavLink to="/about">About</NavLink></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        </DropdownMenu>

        <Link to="/" className="flex gap-1 items-center justify-center">
          <Dumbbell className="text-lg lg:text-3xl"></Dumbbell>
          <h2 className="text-lg lg:text-3xl font-bold text-blue-400">
            <span className="text-black">T</span>hrive
          </h2>
        </Link>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <div className="flex justify-end">
              <NavigationMenuItem>
                <Link to="/products">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/product-management">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Product Management
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
            
                <Link to="/cart">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}  >
                    Cart<Badge className="mx-2">+{cartItems.length}</Badge>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
         <Link to="/signup"> <Button size={"responsive"}>Signup</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
