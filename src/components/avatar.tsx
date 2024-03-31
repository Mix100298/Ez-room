'use client'
interface AvatarProps {
    src: string | null;
    alt: string | null;
    name: string | null ;
}

export default function Avatar({ src , alt, name }: AvatarProps) {
    const firstChar = name?.charAt(0).toUpperCase();
    console.log(src);
    return (
       <div className="w-9 h-9 ring-2 ring-blue-500 flex rounded-full justify-center items-center">
        {src == null ? <span className="font-bold text-1xl text-gray-700">{firstChar} </span> : <img className="rounded-full  object-cover " src= {src} alt={alt}/>}
       </div>
    )
}

