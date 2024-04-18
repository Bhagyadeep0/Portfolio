// icons
import { BsSend } from "react-icons/bs";
//framer-motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "./Variants";
import { useState } from "react";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    textarea: "",
  });
  const [formError, setFormError] = useState({});

  //custom error message
  const validation = (name, value) => {
    switch (name) {
      case "name":
        if (!value) {
          return "Name is required";
        } else if (value.length > 20) {
          return "Name is too long, must be within 20 characters";
        }
        break;
      case "email":
        if (!value) {
          return "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        break;
      case "number":
        if (!value) {
          return "number is required";
        } else if (value.length < 10 || value.length >= 11) {
          return "number is too short, should be in 10 digit format";
        }
      case "subject":
        if (!value) {
          return "subject is required";
        } else if (value.length < 5) {
          return "subject is too short, must be at least 5 characters";
        } else if (value.length > 20) {
          return "subject is too long, must be within 20 characters";
        }
        break;
      case "msg":
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
      }
    });
    setFormError(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted:", formValue);
      // Submit form logic
    }
  };
  return (
    <section id="contact" className="pt-[100px] space-y-10 container mx-auto z-50">
      {/* title */}
      <motion.div  variants={fadeIn("scaleUp",0.3,1.2)} initial="hidden" whileInView="show" className="text-center">
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

        <div className="flex-1 flex flex-col items-center max-w-[550px]">
          <motion.form
          variants={fadeIn("up",0.3,1.2)}
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
                  formError.name ? "border-red-500" : "border-blue-300"
                }`}
              />
              {formError.name && <p>{formError.name}</p>}
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
                  formError.email ? "border-red-500" : "border-blue-300"
                }`}
              />
              {formError.email && <p>{formError.email}</p>}
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
                  formError.subject ? "border-red-500" : "border-blue-300"
                }`}
              />
              {formError.subject && <p>{formError.subject}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="msg">Message</label>
              <textarea
                type="textarea"
                name="msg"
                id="msg"
                rows={8}
                value={formValue.msg}
                onChange={handleChange}
                className={`w-full  border rounded-md focus:outline-none ${
                  formError.msg ? "border-red-500" : "border-blue-300"
                }`}
              />
              {formError.msg && <p>{formError.msg}</p>}
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
