import Link from "next/link"

export default function Home() {
  return (
    <div className="flex justify-center bg-zinc-200 w-full h-screen"> 
      <div className="w-2/4 h-2/4 mt-24 flex justify-center">
        <div className="w-1/4  hover:scale-150 cursor-pointer overflow-hidden hover:overflow-visible"><Link href="/luke"><img src="/luke.png" alt="Luke skywalker" /></Link></div>
        <div className="w-1/4  hover:scale-150 cursor-pointer overflow-hidden hover:overflow-visible"><Link href="/c3po"><img src="/c3po.png" alt="" /></Link></div>
        <div className="w-1/4  hover:scale-150 cursor-pointer overflow-hidden hover:overflow-visible mt-20"><Link href="/r2d2"><img src="/r2d2.png" alt="" /></Link></div>
      </div>
    </div>
  )
}