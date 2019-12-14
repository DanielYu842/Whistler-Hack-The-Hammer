import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import '../css/Post.css'






const Card = (props) => {
  const [hover, setHover] = useState(false)
  const hoverState = useSpring({
    transform: hover
      ? 'translate3d(0px, -12px, 0px) scale(1.03)'
      : 'translate3d(0px, 0px, 0px) scale(1)',
      
    /*boxShadow: hover
    ? '-1px 15px 45px 0px rgba(0, 0, 0, 0.3)'
    : '-1px 10px 45px 0px rgba(0, 0, 0, 0.1)',*/
    config: config.wobbly
  })

  return (
    <animated.div
      style={{

    
        ...hoverState
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
            <div className="post-div">
                <div className="post-title-div">
                    {props.title}
                </div>
                <div className="post-file-div">
                    filename
                </div>
            </div>
    </animated.div>
  )
}

export default Card
