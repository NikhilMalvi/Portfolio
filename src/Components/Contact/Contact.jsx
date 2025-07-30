import React from "react";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86b3b744-aaad-48ec-ad6c-bca7cf69835a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <title>Contact | Nikhil Malviya - Web Developer</title>

      <meta
        name="description"
        content="Let's work together! Contact Nikhil Malviya, a passionate web developer, for your next website or WordPress project. Available for freelance and collaboration."
      />
      <div className="contact section_container">
        <div className="contact_heading">
          <h1>Contact</h1>
          <p>Let's start right now!</p>
        </div>
        <div className="contact_data">
          <div className="max_container contact_container">
            <div className="col1">
              <h1 className="primery_heading headings">Contact Detail</h1>
              <div className="box_icon">
                <IoLocationOutline size={22} color="var(--text-color)" />
                <h1 className="location">Ahmedabad | India</h1>
              </div>
              <div className="box_icon">
                <IoMailOutline size={22} color="var(--text-color)" />
                <h1 className="email">
                  <a href="mailto:nikhilmalvi845@gmail.com">
                    nikhilmalvi845@gmail.com
                  </a>
                </h1>
              </div>
            </div>
            <div className="col2">
              <div className="form_container">
                <h1>Send Message</h1>
                <form action="" onSubmit={onSubmit}>
                  <label htmlFor="Enter your name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />

                  <label htmlFor="Enter your email">email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                  {/* <label htmlFor="Enter your Subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your Subject"
                  required
                /> */}

                  <label>Message</label>
                  <textarea
                    name="messages"
                    rows="6"
                    placeholder="Enter your message"
                  ></textarea>
                  <button type="submit" className="btn">
                    submit
                  </button>
                </form>
                <span className="send_message">{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
