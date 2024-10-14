import React, { useState } from 'react'
import './Passwordd.css'

function Passwordd() {

  const [finaltext,setFinal]= useState()
  const[output,setOutput]=useState()

  var final =""
  var print =""
  var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercase ="abcdefghijklmnopqrstuvwxyz"
  var symboll="~!@#$%^&*"
  var numericc ="1234567890"
  
  const [upper,setUpper]=useState(false)
  const [lower,setLower]=useState(false)
  const [symbol,setSymbol]=useState(false)
  const [numeric,setNumeric]=useState(false)

    const getvalue = () =>{
 
      if(upper==true){
        print+=uppercase
       }
       if(lower==true){
        print+=lowercase
       }
       if(symbol==true){
        print+=symboll
       }
       if(numeric==true){
        print+=numericc
       }

    for( let i=0;i<finaltext;i++){
       var a= Math.floor(Math.random()*print.length);
       setOutput(final+=print[a])
      
}

console.log(print);

    }

  return (
    <div className='box'>
     <u><h2>Password Generate</h2> </u><br />
        <div className="">
        <input className='inp' type="text" onChange={(e)=> setFinal (e.target.value)} /> <button className='btn' onClick={getvalue}>generate</button>
        <div className="flex">
        <input className='inline' type="checkbox" onChange={(e)=>setUpper(e.target.checked)}/><label htmlFor="">uppercase</label>
        </div>
        <div className="flex">
        <input className='inline' type="checkbox" onChange={(e)=>setLower(e.target.checked)}/><label htmlFor="">lowercase</label></div>
        <div className="flex ">
        <input className='inline' type="checkbox"  onChange={(e)=> setSymbol(e.target.checked)}/><label htmlFor="">symbol</label></div>
        <div className="flex">
        <input className='inline' type="checkbox" onChange={(e)=> setNumeric(e.target.checked)} /><label htmlFor="">numeric</label></div>
        </div>
        <u><h3 className='bottom'>your password is:{output}</h3></u>
    </div>
  )
}

export default Passwordd