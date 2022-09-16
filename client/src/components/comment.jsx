import { ArrowForward } from '@mui/icons-material'
import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import AvatarImgBig from './AvatarImgBig'
import { useState } from 'react'
import { useEffect } from 'react'
const demopic = [
    {   imgsrc:"",
        comment:"I found myself working in a true partnership that result in an incredible experience, and an end product that is the best for your shipping.",
        name:"Rock Robin"
    },
    {   imgsrc:"",
        comment:"When i started my company in early 2009 a key component was logistics and international freight for my products. I wanted a company that would partner with me, not just be a supplier. Delivex has been just that, a partner in business.",
        name:"Todd Charles"
    }
]

const initialIndex = 0

// class           
function Comment() {
const [index, setIndex] = useState(initialIndex)

useEffect(()=>{ 
    const id = setInterval(handleClickforward,6000);  
     return ()=> clearInterval(id);
    }
   ,[]
)
// front
function addtransitionforward(){
const bigAvatar = document.getElementById("bigAvatar")
const name = document.getElementById("name")
const comment = document.getElementById("comment")


name.classList.add("text-transition")
comment.classList.add("text-transition")   

bigAvatar.classList.add("transition-forward")
}
// backward
function addtransitionback(){
const bigAvatar = document.getElementById("bigAvatar")
const name = document.getElementById("name")
const comment = document.getElementById("comment")

bigAvatar.classList.add("transition-backward")
name.classList.add("text-transition")
comment.classList.add("text-transition")
}

const removeTransition= ()=>{
const bigAvatar = document.getElementById("bigAvatar")
const name = document.getElementById("name")
const comment = document.getElementById("comment")
bigAvatar.classList.remove("transition-forward")
bigAvatar.classList.remove("transition-backward")
name.classList.remove("text-transition")
comment.classList.remove("text-transition")
}

function handleClickforward(){
    addtransitionforward()
const intv = setTimeout(removeTransition,500)
    setIndex(ele => {
        if(ele === demopic.length-1){
            return 0
        }
       return ele + 1
    })  
    
}
function handleClickbackward(){
    addtransitionback()
const intv = setTimeout(removeTransition,500)
setIndex(ele => {
    if(ele === 0){
        return (demopic.length -1)
    }
   return ele - 1
})   
}




  return (
    <div className='comment justify-content-center  mt-5 mb-5 pb-5 container'>
        <div className=" pb-5">
            
                <AvatarImgBig className={""} id={'bigAvatar'} index={index} demopic={demopic}/>
            
        </div>
        <div className="">
<h2 className='title-track'>Testimonial</h2>
<h5 className="card-text text-small text-secondary" id='comment'>
    {demopic[index]["comment"]}
</h5>
<div className="text-dark" id='name'>- {demopic[index]["name"]}</div>
<div className="badge text-primary">Delivexite</div>
<div className="arrow-buttons pt-2">
<button className='p-2 m-1 rounded-circle' onClick={handleClickbackward}><ArrowBack /></button>
<button className='p-2 m-1 rounded-circle' onClick={handleClickforward}><ArrowForward /></button>
</div>
        </div>

    </div>
  )
}

export default Comment