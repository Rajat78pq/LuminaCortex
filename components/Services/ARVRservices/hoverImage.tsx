import Image from 'next/image'

export default function HoverImage({ src, alt, text }) {
  return (
    <div className="relative group border-2 border-orange-600 rounded-lg">
      <Image src={src} alt={alt} height={600} width={600} objectFit="cover" className="w-full h-full"/>
      <div className="absolute inset-0 flex justify-center items-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white bg-orange-600 w-full py-3 h-[5rem] text-center text-lg">{text}</span>
      </div>
    </div>
  )
}
