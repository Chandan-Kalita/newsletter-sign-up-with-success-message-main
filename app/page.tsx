"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [valid, setValid] = useState(true);
  const [emailInput, setEmailInput] = useState("gfgfg")
  const [submitted, setSubmitted] = useState(false);
  
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  function handleSubmitClick() {
    if (!emailInput.match(emailRegex)) {
      setValid(false);
      return;
    }
    setSubmitted(true);
  }
  function handleDismiss(){
    setEmailInput("");
    setSubmitted(false);
  }
  return (
    <div className="bg-charcoal_grey h-[100vh] w-[100vw] flex justify-center items-center">
      {!submitted ?
        <div className=" p-5 bg-white rounded-xl flex flex-col md:flex-row w-[100%] md:max-w-[70%]"> {/* card */}
          <div className="p-10 flex flex-col justify-center">{/* left */}
            <h1 className=" font-roboto text-5xl  font-bold mb-5" >Stay updated !</h1>
            <p className=' font-roboto  mb-5'>Join 60,000+ product manager receiving monthly updates on:</p>
            <div className=' font-roboto  mb-4'><Image className=' inline-block' src={"./images/icon-list.svg"} alt='check' width={22} height={22} /><p className='pl-3 inline-block'>Product discovery</p></div>
            <div className=' font-roboto  mb-4'><Image className=' inline-block' src={"./images/icon-list.svg"} alt='check' width={22} height={22} /><p className='pl-3 inline-block'>Measuring to ensure updates are a succes</p></div>
            <div className=' font-roboto  mb-5'><Image className=' inline-block' src={"./images/icon-list.svg"} alt='check' width={22} height={22} /><p className=' pl-3 inline-block'>And much more </p></div>
            <div className="flex justify-between mb-2">
              <label className=' font-roboto font-bold text-[.7rem]' htmlFor="">Email Address</label>
              {
                valid ? null : <label className=' font-roboto font-bold text-my_tomato text-[.7rem]' htmlFor="">Valid email required</label>
              }
            </div>
            <input value={emailInput} onChange={(ev) => { setEmailInput(ev.target.value); setValid(true) }} type="text" className={` mb-5 border focus:outline-none ${valid ? '  border-my_grey focus:border-charcoal_grey' : "focus:border-my_tomato border-my_tomato bg-tomato_light"} rounded-md p-3`} />
            <button onClick={handleSubmitClick} className=' font-roboto  bg-dark_slate_grey hover:bg-my_tomato hover:shadow-my_tomato hover:shadow-md p-4 rounded-lg text-white'>Subscribe to monthly newslater</button>
          </div>
          <img src={"./images/illustration-sign-up-desktop.svg"} alt='sign up image' width={'40%'} />
        </div>
        :
        <div className=" p-10 bg-white rounded-xl w-[100%] md:max-w-[30%]"> {/* card */}
        <Image className='mb-4 inline-block' src={"./images/icon-list.svg"} alt='check' width={52} height={52} />
          <h1 className='text-4xl font-roboto  font-bold mb-5'>Thanks for subscribing!</h1>
          <p className='mb-7 font-roboto '>A confirmation mail has been sent to <span className='font-bold'>{emailInput}</span>. Please open it and click the button inside to verify.</p>
          <button onClick={handleDismiss} className=' font-roboto w-full bg-dark_slate_grey hover:bg-my_tomato hover:shadow-my_tomato hover:shadow-md p-3 rounded-lg text-white'>Dismiss message</button>
        </div>  
      }
    </div>
  )
}
