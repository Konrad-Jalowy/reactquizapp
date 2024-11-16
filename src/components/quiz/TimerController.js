import React from 'react'
import Timer from './Timer'
export default function TimerController({timeout, onTimeout, blocked, idx, shouldRender}) {
  return (
    <>
      {shouldRender ?  
            <Timer 
            key={idx+1} 
            timeout={timeout} 
            onTimeout={onTimeout} 
            blocked={blocked}
            /> : null }
    </>
  )
}
