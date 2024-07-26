import Banner from "@/components/Banner";
import Testimonial from "@/components/Testimonial";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <div className="p-10 mx-auto">
        <Testimonial />
      </div>
    </main>
  );
}
