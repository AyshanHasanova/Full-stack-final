import React from 'react'

interface LinkProps{
    linkIcindekiYazi:string
}
const Link:React.FC<LinkProps> = (props) => {
  return (
    <a href="#" className="explore-btn">{props.linkIcindekiYazi}</a>
  )
}

export default Link