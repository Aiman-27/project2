import React from 'react';
import './Hello.css'

function Hello({firstname}) {

  return <p className="myname">This is para in Hello Tag: {firstname}</p>
}

export default Hello;
