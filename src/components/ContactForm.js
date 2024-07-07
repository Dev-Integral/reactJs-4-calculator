import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdMessage, MdSubject } from "react-icons/md";

function ContactForm() {
  return (
    <form className="flex flex-col gap-5">
      <p className="text-3xl mb-4 font-bold">Send us a mail</p>
      <div className="flex items-center relative">
        <span className="absolute left-4 text-2xl text-white">
          <FaUser />
        </span>
        <input
          name="name"
          placeholder="Your name"
          className="stylePlaceholder p-4 pl-12 text-2xl outline-none w-full bg-ta-blue text-white placeholder-white"
        />
      </div>
      <div className="flex items-center relative text-white">
        <span className="absolute left-4 text-2xl">
          <MdEmail />
        </span>
        <input
          name="name"
          placeholder="Your email"
          className="p-4 pl-12 text-2xl outline-none border w-full bg-ta-green placeholder-white"
        />
      </div>
      <div className="flex items-center relative text-white">
        <span className="absolute left-4 text-2xl">
          <MdSubject />
        </span>
        <input
          name="name"
          placeholder="Subject"
          className="p-4 pl-12 text-2xl outline-none border w-full bg-ta-red placeholder-white"
        />
      </div>
      <div className="flex items-center relative text-white">
        <span className="absolute left-4 top-5 text-2xl">
          <MdMessage />
        </span>
        <textarea
          name="name"
          placeholder="Message"
          className="p-4 pl-12 text-2xl outline-none border w-full bg-ta-purple placeholder-white"
          rows={4}
        ></textarea>
      </div>
      <div>
        <button className="flex text-2xl items-center justify-center gap-3 font-bold bg-blue-100 w-full p-4"><BsFillSendFill />SEND</button>
      </div>
    </form>
  );
}

export default ContactForm;
