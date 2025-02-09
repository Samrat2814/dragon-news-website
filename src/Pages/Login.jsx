import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext);
  const [error, setError]= useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    userLogin(email, password)
     .then((result) => {
        // Signed in
        setUser(result.user);
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {
        setError({...error, login: err.code})
      })

  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-semibold text-center text-2xl mt-2">Login Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            {
              error.login && <p className="text-red-400">{error.login}</p>
            }
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center font-semibold">Dont’t Have An Account ?<Link className="text-blue-400" to="/auth/register"> Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
