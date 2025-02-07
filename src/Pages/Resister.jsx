import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Resister = () => {
  const { createNewUser, user, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photo-url");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photoUrl, email, password);

    createNewUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-semibold text-center text-2xl mt-2">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="fieldset-label">Photo URL</label>
            <input
              name="photo-url"
              type="text"
              className="input"
              placeholder="Photo url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="text-center font-semibold">
            Already Have An Account ?
            <Link className="text-blue-400" to="/auth/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Resister;
