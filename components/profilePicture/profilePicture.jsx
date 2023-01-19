import Image from "next/image";
import ProfilePicture from "../../public/images/profile.jpg";
function ProfilePicture({ src }) {
  return (
    <Image
      src={src}
      height={100}
        width={100}
        alt="Profile Picture"
        />
  );
}

export default ProfilePicture;