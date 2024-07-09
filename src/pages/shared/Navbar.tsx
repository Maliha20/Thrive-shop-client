import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto container">
      <div className="py-2 flex items-center justify-around bg-blue-50 rounded-sm">
        <Link to="/" className="flex gap-1 items-center justify-center">
          <Dumbbell className="text-3xl"></Dumbbell>
          <h2 className="text-3xl font-bold text-blue-400">
            <span className="text-black">T</span>hrive
          </h2>
        </Link>
        <NavigationMenu className="">
        <NavigationMenuList>
          <div className="flex justify-end">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Product Management
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Cart
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
        <div>


    <Button>Signup</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
