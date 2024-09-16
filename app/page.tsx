import Bento from "@/components/shared/Bento";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Welcome from "@/components/shared/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
       <Header />
       <Hero />
       <Bento />
    </main>
  );
}
