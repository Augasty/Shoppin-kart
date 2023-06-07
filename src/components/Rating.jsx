import React from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'
const Rating = ({rating, onClick,style}) => {
  return (
    <div>
        {[...Array(5)].map((_,idx)=>(
            <span key={idx} onClick={()=>onClick(idx)} style={style}>
                {rating > idx ? (<AiFillStar fontSIze='15px'/>) : (<AiOutlineStar fontSIze='15px'/>)}
            </span>
        ))}
    </div>
  )
}

export default Rating