import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
}

const CardImage = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt!}
      width={500}
      height={300}
      className="w-full object-cover"
    />
  );
};

export { CardImage };
