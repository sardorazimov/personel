import { ArrowRight } from "lucide-react"
import lena from '@/public/lena.jpg'
import Image from "next/image"
import { Button } from "../ui/button"
import { List } from "./listui"


const Hero = () => {
  return (
    <section className="py-20">
      <div className="py-10  container flex justify-between md:flex-row flex-col px-20 mx-20">
        <div className="">
          <div className="w-10 h-10 rounded-full ">
            <Image src={lena} alt="" className="rounded-full w-10 h-10 object-cover" />
          </div>
          <ArrowRight className="text-blue-500 mt-2 gap-4" size={25} />
          <div className="flex flex-col">
            <h1 className="mt-2 mx-10">Hello my Frends</h1>
            <div className="w-40 h-20 border mt-4  rounded-lg border-white/15">
               <h1 className="text-center text-white/70">Can you Quetsion</h1>
               <p className="px-2 text-center flex">
                Nextjs15  coming soon 
               </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
            <div className="flex ">
                <h1>Get Indivial</h1>
            </div>
            <div className="flex flex-col">
                <Button>Trick</Button>
            </div>
        </div>
      </div>
     <main className="py-10 border px-20 mx-20 h-[550px] md:flex-row flex flex-col rounded-lg border-white/15 ">
     <div className="flex justify-between">
      <div className="flex w-full h-full">
       <Image 
        src={"/spheres-dark.jpg"}
        alt=""
        width={450} 
        height={450}
        className="flex items-center justify-center bg-cover "/>
       </div>
       <div className="">
        <List />
      </div>
     </div>
     </main>
    </section>
  )
}

export default Hero
