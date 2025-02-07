import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-semibold text-center text-2xl mt-2">Login Your Account</h2>
        <form className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />
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
