import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import Programs from "./components/Programs";
import Professionals from "./components/Professionals";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[10vw] md:pt-[4vw]">
        <Hero />
      </main>
      <About />
      <KeyFeatures />
      <Programs />
      <Professionals />
      <Facilities />
      {/* <Footer /> */}
    </>
  );
}
