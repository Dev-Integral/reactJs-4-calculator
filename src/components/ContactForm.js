import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdMessage, MdSubject } from "react-icons/md";
import { useForm, } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqngdvv");
  if (state.succeeded) {
    return <p className="text-3xl text-center font-bold py-6 px-6">Email sent successfully!</p>;
  }
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <p className="text-3xl mb-4 font-bold">Send us a mail</p>
      <div className="flex items-center relative">
        <span className="absolute left-4 text-2xl text-white">
          <FaUser />
        </span>
        <input
          id="name"
          name="name"
          placeholder="Your name"
          type="text"
          required
          className="stylePlaceholder p-4 pl-12 text-2xl outline-none w-full bg-ta-blue text-white placeholder-white"
        />
      </div>
      <div className="flex items-center relative text-white">
        <span className="absolute left-4 text-2xl">
          <MdEmail />
        </span>
        <input
          name="email"
          placeholder="Your email"
          required
          type="email"
          className="p-4 pl-12 text-2xl outline-none border w-full bg-ta-green placeholder-white"
        />
      </div>
      <div className="flex items-center relative text-white">
        <span className="absolute left-4 text-2xl">
          <MdSubject />
        </span>
        <input
          name="subject"
          type="text"
          required
          placeholder="Subject"
          className="p-4 pl-12 text-2xl outline-none border w-full bg-ta-red placeholder-white"
        />
      </div>
      <div className="flex items-center relative text-white">
        <span className="absolute left-4 top-5 text-2xl">
          <MdMessage />
        </span>
        <textarea
          name="message"
          placeholder="Message"
          required
          type="text"
          className="p-4 pl-12 text-2xl outline-none border w-full bg-ta-purple placeholder-white"
          rows={4}
        ></textarea>
      </div>
      <div>
        <button
          disabled={state.submitting}
          type="submit"
          className="flex text-2xl items-center justify-center gap-3 shadow font-bold bg-blue-100 w-full p-4"
        >
          <BsFillSendFill />
          SEND NOW
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
