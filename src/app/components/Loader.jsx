import Image from "next-export-optimize-images/image";

export const Loader = () => {
  return (
    <div className="w-full min-h-[500px] h-full flex justify-center items-center">
      <Image src="/loader.gif" width="64" height="64" alt="loader" />
    </div>
  );
};
