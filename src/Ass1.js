import React from 'react';
import './Ass1.css'

function Ass1({firstname, age}) {

  return <div className="react">
          <b><big>React Practice Tasks</big></b>
          <br/>
          <ul className="ul">
          <li><b><u>Plain Function Tasks</u></b></li>
          <br/>
          <p>Hello, My name is <b>{firstname}</b> and my age is <b>{age}</b>! This is a basic example from React tutorial.</p>
          <br/>
          <li><b><u>Arrow Function Tasks</u></b></li>
          <br/>
          <p>I am <b>{firstname}</b> and I used Arrow Function to print this.</p> 
          <li><b><u>Media Card Tasks</u></b></li>
          <br/>
          <small><b>Profile Picture</b></small>
          <br/>
          <p>This is the body of the Media Card.</p>
          </ul>
          <b><u>Gate Task:</u></b>
          <p>The Gate is <b className="close">Closed</b></p>
          Made By <u><b>Aiman Nadeem</b></u>
          </div>
}

export default Ass1;