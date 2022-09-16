import React from 'react'
import { useState } from 'react';


function Bubbles({burst}) {
  return (
    <div>
<div className="box box1" onClick={burst} ></div>
<div className="box box2" onClick={burst}  ></div>
<div className="box box3" onClick={burst} ></div>
<div className="box box4" onClick={burst} ></div>

    </div>
  )
}

export default Bubbles;