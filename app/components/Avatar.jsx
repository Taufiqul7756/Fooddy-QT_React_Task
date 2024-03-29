import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full"
        height="30"
        width="30"
      />
    );
  }
  return <FaUserCircle size={34} />;
};

export default Avatar;
