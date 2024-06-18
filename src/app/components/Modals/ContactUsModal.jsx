import Modal from "../Modal";
import { Suspense, useEffect, useState } from "react";
import { z } from "zod";
import { Typography } from "../UI/Typography";
import { BlueButton } from "../UI/Buttons/BlueButton";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "../Loader";

// const schema = z.object({
//   name: z.string().min(3, "Name is required"),
//   email: z.string().email("Invalid email address"),
//   message: z.string(),
// });

// const popup = {
//   hidden: {
//     opacity: 0,
//     x: 40,
//   },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { type: "spring", duration: 0.5, stiffness: 150, mass: 0.5 },
//   },
//   hide: {
//     opacity: 0,
//     x: -20,
//     transition: { type: "spring", duration: 0.5, },
//   },
// };

export const ContactUsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <iframe
          ariaLabel="Get in touch!"
          frameborder="0"
          style={{ height: 500, width: "99%", border: "none" }}
          src="https://forms.zohopublic.com/easycut/form/Getintouch/formperma/Kp71kdB60A8UPI5FTskmhwZ5XNczZ1iC03HZOElnsLQ"
        ></iframe>
    </Modal>
  );
};

/** 
 * const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setErrors({});
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      const errorMessages = result.error.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(errorMessages);
      setTimeout(() => {
        setErrors({});
      }, 3000);
    } else {
      setErrors({});
      console.log("Form submitted successfully:", formData);
    }
  };

 * <div className="w-full max-w-[400px] mx-auto text-center">
        <Typography.H2Bold className="text-gray-100">
          <span className="text-blue">Contact </span>us!
        </Typography.H2Bold>
        <Typography className="text-gray-200 mb-10">
          Fill out the form and we will promptly contact you
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="w-11/12 flex flex-col items-center gap-4 mx-auto"
        >
          <div className="w-full">
            <input
              className={`w-full bg-transparent py-3 px-4 text-gray-200 border border-gray-400 rounded-xl ${errors.name ? "border-red-500 text-red-500" : ""}`}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            <AnimatePresence>
              {errors.name ? (
                <motion.div
                  style={{
                    color: "red",
                    textAlign: "left",
                    marginLeft: "10px",
                    marginTop: "2px",
                  }}
                  variants={popup}
                  initial="hidden"
                  animate="show"
                  exit="hide"
                >
                  <p>{errors.name}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="w-full">
            <input
              className={`w-full bg-transparent py-3 px-4 text-gray-200 border border-gray-400 rounded-xl ${errors.email ? "border-red-500 text-red-500" : ""}`}
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
            <AnimatePresence>
            {errors.email ? (
              <motion.div
                style={{
                  color: "red",
                  textAlign: "left",
                  marginLeft: "10px",
                  marginTop: "2px",
                }}
                variants={popup}
                initial="hidden"
                animate="show"
                exit="hide"
              >
                <p>{errors.email}</p>
              </motion.div>
            ) : null}
            </AnimatePresence>
          </div>
          <div className="w-full">
            <textarea
              className="w-full bg-transparent py-3 px-4 text-gray-200 border border-gray-400 resize-none rounded-xl"
              id="message"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <BlueButton className="w-full" type="submit">
            Send
          </BlueButton>
        </form>
      </div>
 */
