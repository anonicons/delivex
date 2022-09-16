import React from 'react'

function AvatarImgBig({id,className,demopic,index}) {

  return (
      <div className={"commentImg"}>
          <div  className={`maincommentImg ${className}`} >
        <img src={demopic[index].imgsrc} key ={`${id}`} alt="" className='' id={id}/>
        </div></div>
  )
}

export default AvatarImgBig