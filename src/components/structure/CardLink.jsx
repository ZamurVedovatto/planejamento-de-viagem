import React from 'react'
import {CardWrapper} from './../ComponentStyles'


// const CardLink = ({title, url}) => {
//   return (
//     <CardWrapper>
//       <div>{title}</div>
//       <div>{url}</div>
//     </CardWrapper>
//   )
// }

const CardLink = React.forwardRef(({ navigate, ...props }, ref) => {
  return (
    <a ref={ref} {...props} onClick={handleClick}>💅 {props.children}</a>
  )
})

export default CardLink