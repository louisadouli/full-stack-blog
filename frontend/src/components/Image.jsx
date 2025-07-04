import React from 'react'
import { IKImage } from 'imagekitio-react'

const Image = ({src, className, alt, w, h}) => {
  return (
    <IKImage 

      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
        path={src}
        loading="lazy"
         className={className}
         lqip={{active:true, quality:20}}
          alt={alt}
          width={w}
          height={h}
    />

 
  )
}

export default Image
  