
import Image from "next/image";

export default function Photo() {
  return (
    <Image
      src="/img1.jpg" 
      alt="Моє фото"
      width={370}
      height={400}
    />
  );
}
