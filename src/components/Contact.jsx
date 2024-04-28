// icons
import { BsSend } from "react-icons/bs";
//framer-motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "./Variants";
import { useState, useRef } from "react";
// emailJs
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState({});
  const form_ref = useRef();

  //custom error message
  const validation = (name, value) => {
    switch (name) {
      case "name":
        if (!value) {
          return "Name is required";
        } else if (value.length > 30) {
          return "Name is too long, must be within 30 characters";
        }
        break;
      case "email":
        if (!value) {
          return "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        break;
      case "subject":
        if (!value) {
          return "subject is required";
        } else if (value.length < 5) {
          return "subject is too short, must be at least 5 characters";
        } else if (value.length > 200) {
          return "subject is too long, must be within 200 characters";
        }
        break;
      case "message":
        if (!value) {
          return "Message is required";
        }
        break;
      default:
        return "";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setFormError({ ...formError, [name]: validation(name, value) });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Custom validation logic
    const newErrors = {};
    Object.keys(formValue).forEach((key) => {
      const error = validation(key, formValue[key]);
      if (error) {
        newErrors[key] = error;

        // formValue[key] = ""
      }
    });
    setFormError(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit form logic
      // emailJS
      emailjs
        .sendForm("service_pr388ef", "template_bso4r6n", form_ref.current, {
          publicKey: "lYt7-a45PRv7wzwtF",
        })
        .then(
          () => {
            alert("Message Send Successfully!");
          },
          (error) => {
            alert("Oops Something went wrong!");
            console.log("Error...", error.text);
          }
        );
    }
    setFormValue({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <section
      id="contact"
      className="pt-[100px] space-y-10 container mx-auto z-50"
    >
      {/* title */}
      <motion.div
        variants={fadeIn("scaleUp", 0.3, 1.2)}
        initial="hidden"
        whileInView="show"
        className="text-center"
      >
        <h1 className="h1">
          Contact Me <hr className="bg-black w-full h-1" />
        </h1>
        <p className="p">Let's Talk</p>
      </motion.div>
      {/* form */}
      <div className=" flex flex-col lg:flex-row  items-center justify-around gap-10 container mx-auto ">
        <div className="text-center lg:text-center">
          <h2 className="h2">Info</h2>
          <p className="p">mail: b.ghosh0330@gmail.com</p>
        </div>

        <div className="flex-1 flex flex-col items-center max-w-[650px]">
          <motion.form
            ref={form_ref}
            variants={fadeIn("up", 0.3, 1.2)}
            initial="hidden"
            whileInView="show"
            onSubmit={handleSubmit}
            className="space-y-5 shadow-md py-2 px-3 rounded-xl w-full"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formValue.name}
                onChange={handleChange}
                className={`w-full  border rounded-md focus:outline-none ${
                  formError.name ? "border-red-500" : "border-value4"
                }`}
              />
              {formError.name && <p className="text-red-500 capitalize">{formError.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValue.email}
                onChange={handleChange}
                className={`w-full border rounded-md focus:outline-none ${
                  formError.email ? "border-red-500" : "border-value4"
                }`}
              />
              {formError.email && <p className="text-red-500 capitalize">{formError.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="subject"
                name="subject"
                id="subject"
                value={formValue.subject}
                onChange={handleChange}
                className={`w-full border rounded-md focus:outline-none ${
                  formError.subject ? "border-red-500" : "border-value4"
                }`}
              />
              {formError.subject && <p className="text-red-500 capitalize">{formError.subject}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                type="message"
                name="message"
                id="message"
                rows={8}
                value={formValue.message}
                onChange={handleChange}
                className={`w-full  border rounded-md focus:outline-none ${
                  formError.message ? "border-red-500" : "border-value4"
                }`}
              />
              {formError.message && <p className="text-red-500 capitalize">{formError.message}</p>}
            </div>
            <div className="text-center lg:text-start">
              <button type="submit" className="btn">
                <BsSend />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
