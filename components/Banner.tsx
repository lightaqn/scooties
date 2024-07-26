import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-gray-400 py-6 flex flex-col relative">
      <h1 className="font-extrabold text-7xl whitespace-nowrap uppercase">
        Electric Scooter
      </h1>
      <div className="grid lg:grid-cols-2">
        <div className="">
          <p></p>
          <Link href="/product" className=" my-4">
            <button className="button">View Product</button>
          </Link>
        </div>
        <div className="rounded-full p-2 border-white border w-22 h-22 hover:animate-pulse">
          <div className="rounded-full p-2 border-white border w-full h-full hover:border-lime-500">
            <div className="rounded-full bg-gray-700 w-full h-full items-center justify-center border-double border-white">
              <PlayIcon className="text-white bg-white text-7xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-½ z-10">
        <Image
          src="/scooter.png"
          className=""
          height={300}
          width={250}
          alt="mainImage"
        />
      </div>
    </div>
  );
};
export default Banner;
