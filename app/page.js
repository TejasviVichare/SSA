import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[10vw] md:pt-[4vw]">
        <Hero />
      </main>
    </>
  );
}
