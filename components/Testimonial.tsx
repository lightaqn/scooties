import Image from "next/image"

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <div className="flex items-start bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white relative">
    <h1 className="text-right uppercase text-5xl">
      The Latest Generation of Electric Scooters
    </h1>
    <p>
      There is no overstating the importance of personal mobility in web everyday
      urban lifestyle. <span></span> offers cutting edge solutions to hitherto
      unsolved safety and usability constraints thereby redefining the experience
      for every commuter{" "}
    </p>
    <div className="flex space-x-2 mt-6">
      <p className="skew-y-4 border-r-2 border-gray-700 space-y-2">
        <span className="font-extrabold text-3xl tracking-tight">5M+</span>
        <span>Verified Buys</span>
      </p>
      <p className="skew-y-4 border-r-2 border-gray-700 space-y-2">
        <span className="font-extrabold text-3xl tracking-tight">20+</span>
        <span>Support Staff</span>
      </p>
      <p className="skew-y-4 border-r-2 border-gray-700 space-y-2">
        <span className="font-extrabold text-3xl tracking-tight">4.8</span>
        <span>Product Rating</span>
      </p>
    </div>
    <div className="absolute right-10 bottom-0">
      <Image
        src="/scooter.png"
        className=""
        height={200}
        width={150}
        alt="bannerImage"
      />
    </div>
  </div>;
  
  )
}

export default Testimonial





