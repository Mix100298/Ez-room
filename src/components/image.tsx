'use client'
import React,{Suspense,useState} from 'react'

const Image = (props: { src: string, alt: string }) => {
    const [src, setSrc] = useState("");
    setTimeout(() => {
        setSrc(props.src);
    }, 3000);

    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <img src={src} alt={props.alt} />
        </Suspense>
    );
}

export default Image;