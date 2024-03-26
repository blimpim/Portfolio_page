import { useState } from 'react';
import Media from '../Media/Media';
import './Contact.scss';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formData })
    })
    .then(() => alert("Your message has been sent!"))
    .catch(error => alert(error));
  };

  return (
    <section id='contactSection'>
      <h2>Get in touch</h2>
      <form name="contactForm" className="Contact" onSubmit={handleSubmit} method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <div className="formItem">
            <label>Name</label>
            <input type="text" name="name" className="input" placeholder="John Doe" value={formData.name} onChange={handleChange} />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" name="email" className="input" placeholder="johndoe@gmail.com" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div id="formText">
          <label>Message</label>
          <textarea name="message" className="input" placeholder="Your message here..." value={formData.message} onChange={handleChange}></textarea>
        </div>
        <input className="Button" type="submit" value="Send" />
      </form>
      <Media fill="#A44234" className="_Contact" />
    </section>
  );
}
