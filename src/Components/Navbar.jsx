import { Link } from "react-router-dom";
import userItem from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
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
          {user && user?.email ? (
            <button onClick={logout} className="btn btn-neutral rounded-none">Logout</button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
