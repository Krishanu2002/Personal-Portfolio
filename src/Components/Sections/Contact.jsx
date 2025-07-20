import emailjs from "emailjs-com";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong.Please try again. "));
  };

  return (
    <section
      id="contacts"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-150 ">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl py-2 font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">
            Get in Touch
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transtition focus:outline-none focus:border-lime-700 focus:bg-blue-500/5"
              placeholder="Type your name here."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transtition focus:outline-none focus:border-lime-700 focus:bg-blue-500/5"
              placeholder="ex:- example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="">
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transtition focus:outline-none focus:border-lime-700 focus:bg-blue-500/5"
              placeholder="Type your message here."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-[100px]  bg-gray-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-gray-700 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
