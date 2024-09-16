import { ArrowDown, ArrowUpRight, Heart } from "lucide-react"
import Image from "next/image"
import Lena from '@/public/lena.jpg'
import { FcUpRight } from "react-icons/fc"

const Bento = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="px-10  lg:mx-10 flex flex-col gap-x-10 lg:gap-y-10 lg:flex md:flex-row">
        <div className="border hover:bg-white/5 flex flex-col w-96 h-80 rounded-lg border-white/20">
         <div className="flex justify-between w-full border-b h-20 border-white/10">
         <div>
          <div className="flex   mt-4 ml-1 ">
            <Image  src={Lena} alt="" 
             className=" object-cover  w-10 h-10 rounded-[100%] " /> 
           <div >
             <h1 className="mt-1 px-1">Lenna
             </h1>
             <a href="" className="text-white/45">@lena</a>  
            </div> 
            </div>
            </div>
            <div>
                <Heart className="text-rose-500 mt-4 cursor-pointer hover:text-red-300" size={35}  />
            </div>
        </div>
        <div className="mt-10">
            <div className="flex ">
             <Image src={'/vercel.svg'} alt="" width={20} height={20} className=" h-10 w-10 mx-2"/>  
             <a href="https://vercel.com" className="mt-4 gap-1 flex">Vercel <ArrowUpRight />
              </a>     
            </div>
            <div className="mt-10">
                <p className="px-2  text-center">
                Get started using our pre-built templates. Easily stream long-running
                 LLM responses for a better
                </p>
            </div>
        </div>
        </div>
        <div className="border flex flex-col  w-96 h-80 rounded-lg border-white/20">
        <div className="flex justify-between w-full border-b h-20 border-white/10">
         <div>
          <div className="flex   mt-4 ml-1 ">
            <Image  src={Lena} alt="" 
             className=" object-cover  w-10 h-10 rounded-[100%] " /> 
           <div >
             <h1 className="mt-1 px-1">Lenna
             </h1>
             <a href="" className="text-white/45">@lena</a>  
            </div> 
            </div>
            </div>
            <div>
                <Heart className="text-rose-500 mt-4 cursor-pointer hover:text-red-300" size={35}  />
            </div>
        </div>
        <div className="mt-10">
            <div className="flex ">
             <Image src={'/vercel.svg'} alt="" width={20} height={20} className=" h-10 w-10 mx-2"/>  
             <a href="https://vercel.com" className="mt-4 gap-1 flex">Vercel <ArrowUpRight />
              </a>     
            </div>
            <div className="mt-10">
                <p className="px-2  text-center">
                Get started using our pre-built templates. Easily stream long-running
                 LLM responses for a better
                </p>
            </div>
        </div>
        </div>
        <div className="border flex  flex-col bg-white/10 w-96 h-80 rounded-lg border-white/20">
        <div className="flex justify-between w-full border-b h-20 border-white/10">
         <div>
          <div className="flex   mt-4 ml-1 ">
            <Image  src={Lena} alt="" 
             className=" object-cover  w-10 h-10 rounded-[100%] " /> 
           <div >
             <h1 className="mt-1 px-1">Lenna
             </h1>
             <a href="" className="text-white/45">@lena</a>  
            </div> 
            </div>
            </div>
            <div>
                <Heart className="text-rose-500 mt-4 cursor-pointer hover:text-red-300" size={35}  />
            </div>
        </div>
        <div className="mt-10">
            <div className="flex ">
             <Image src={'/vercel.svg'} alt="" width={20} height={20} className=" h-10 w-10 mx-2"/>  
             <a href="https://vercel.com" className="mt-4 gap-1 flex">Vercel <ArrowUpRight />
              </a>     
            </div>
            <div className="mt-10">
                <p className="px-2  text-center">
                Get started using our pre-built templates. Easily stream long-running
                 LLM responses for a better
                </p>
            </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Bento
