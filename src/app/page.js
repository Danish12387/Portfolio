import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import 'boxicons/css/boxicons.min.css';

export default function Home() {
  return (
    <>
      <Navbar/>
      <HomeSection/>
    </>
  );
}
