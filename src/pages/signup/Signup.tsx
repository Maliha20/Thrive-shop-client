import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


const Signup = () => {
  return (
    
    <Card className=" mt-20 max-w-md mx-auto p-4 shadow-lg rounded-md">
    <h2 className="text-4xl font-bold mb-4 text-blue-400">Sign Up</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          value=""
        //   onChange=""
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <Input
          type="password"
          name="password"
          id="password"
          value=""
        //   onChange=""
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium">
          Confirm Password
        </label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value=""
        //   onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <Button type="submit" className="w-full bg-primary-gradient text-bold text-xl py-2 rounded-md">
        Sign Up
      </Button>
    </form>
  </Card>
 

  );
};

export default Signup;