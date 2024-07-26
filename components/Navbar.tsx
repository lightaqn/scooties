import Image from "next/image";
const Navbar = () => {
  return (
    <div className="h-[10vh] lg:h-[7vh] grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-5 bg-white">
      <div className="col-span-1 row-span-1">
        //logo
        <Image
          src="/logo.png"
          className=""
          height={}
          width={}
          layout="responsive"
          objectFit="contain"
          alt=""
        />
      </div>

      <div className="col-span-1 lg:col-span-4 row-span-2 grid lg:grid-cols-4 grid-cols-reverse">
        <div className="row-span-1 col-span-full lg:col-span-3">
          <ul className="space-x-2 flex text-gray-800 hover:text-lime-500 justify-evenly">
            <li>ABOUT</li>
            <li>PRODUCT</li>
            <li>PRICING</li>
          </ul>
        </div>

        <div className="col-span-1">
          <button className="button">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
