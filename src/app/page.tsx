import SimpleSlider from "@/components/Hero";
import Newproducts from "@/components/Newproducts";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <SimpleSlider/>
    <Newproducts/>
    < Testimonial/>
   </main>
  );
}
