import React from "react";

function Contactme() {
  return (
    <div>
      <h1 className="text-center text-6xl">Contact Me</h1>
      <div className="contactme grid grid-cols-2 gap-20 text-center overflow-x-hidden w-screen h-screen">
        <div className="containerOfBox m-10 p-10 gap-5 flex flex-col">
          <h1 className="text-4xl ">Contact</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            sapiente architecto distinctio itaque at inventore asperiores eveniet
            molestias nihil odio. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vel quam impedit voluptates ipsum atque officiis
            facilis porro blanditiis nisi cupiditate.
          </p>
          <div className="gap-4 flex flex-col">
            <div>
              <div className="text-2xl minitext">Phone</div>
              <div className="innerText">+91-9024557994</div>
            </div>
            <div>
              <div className="text-2xl minitext">Email</div>
              <div className="innerText">chetansaini7773@gmail.com</div>
            </div>
            <div>
              <div className="text-2xl minitext">Address</div>
              <div className="innerText">Ruwan, Didwana - Rajasthan : India (341318)</div>
            </div>
          </div>
        </div>

        <div className="containerOfBox m-10 p-10 flex flex-col gap-6 innerText text-wrap">
          <h1 className="text-4xl ">Contact Form</h1>
          <input
            className=" input bg-transparent border-gray-100"
            type="text"
            placeholder="Your Name"
          />
          <input
            className=" input bg-transparent border-gray-100"
            type="text"
            placeholder="Your Phone"
          />
          <input
            className=" input bg-transparent border-gray-100"
            type="text"
            placeholder="Your Email"
          />
          <input
            className=" input bg-transparent border-gray-100"
            type="text"
            placeholder="Message"
          />
          <button className="btn containerOfBox">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
