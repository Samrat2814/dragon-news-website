import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-2">
      <h2 className="font-semibold mb-2">Find Us On</h2>
      <div className="join join-vertical flex *:bg-base-100">
        <button className="btn join-item justify-start"><FaFacebook/> Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter/> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
