import { Link } from "react-router-dom";
import userItem from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="space-x-5 ">
        <Link className="hover:text-blue-400" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-400" to="/career">
          Career
        </Link>
        <Link className="hover:text-blue-400" to="/about">
          About
        </Link>
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <img src={userItem} alt="" />
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
