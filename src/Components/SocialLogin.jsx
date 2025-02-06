import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3 ">Login With</h1>
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 btn"><FaGoogle/>Login With Google</button>
        <button className="flex items-center gap-2 btn"><FaGithub size={16}/>Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
