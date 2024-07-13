import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto mt-auto container ">
      <footer className="flex flex-col text-center lg:text-start lg:flex-row gap-6 items-center lg:items-center lg:justify-around rounded-md bg-blue-100 text-gray-400 p-6">
        <div className="w-full lg:w-auto">
          <aside>
            <Link to="/" className="flex gap-1 items-center justify-center">
              <Dumbbell className="text-xl lg:text-4xl text-black"></Dumbbell>
              <h2 className="text-xl lg:text-4xl font-bold text-blue-400">
                <span className="text-black">T</span>hrive
              </h2>
            </Link>
          </aside>
        </div>
        <div className="w-full lg:w-auto">
          <nav>
            <h6 className="text-2xl text-black font-semibold">Services</h6>
            <ul className="list-none">
              <li>
                <a className="link link-hover" href="#">
                  Branding
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Design
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Marketing
                </a>
              </li>
              <li>
                <a className="link link-hover" href="#">
                  Advertisement
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full lg:w-auto">
          <nav>
            <h6 className="text-2xl text-black font-semibold">Company</h6>
            <ul className="list-none">
              <li>
                <a className="link link-hover">About us</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
              <li>
                <a className="link link-hover">Jobs</a>
              </li>
              <li>
                <a className="link link-hover">Press kit</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <h6 className="text-2xl text-black font-semibold">Legal</h6>
            <ul className="list-none">
              <li>
                {" "}
                <a className="link link-hover">Terms of use</a>
              </li>
              <li>
                <a className="link link-hover">Privacy policy</a>
              </li>
              <li>
                <a className="link link-hover">Cookie policy</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
