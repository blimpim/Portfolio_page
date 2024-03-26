import Media from '../Media/Media';
import './Contact.scss';

import { useState } from 'react';

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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    e.preventDefault();

  };

  
  return (
    <section>
      <h2>Get in touch</h2>

      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>

      <form className="Contact" name="contact" method="post" onSubmit={handleSubmit} >
      <input type="hidden" name="form-name" value="contact" />
        <div>
          <div className="formItem">
            <label>Name</label>
            <input type="text" name="name" className="input" placeholder="" value={formData.name} onChange={handleChange} />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" name="email" className="input" placeholder="" value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <div id="formText">
          <label>Message</label>
          <textarea name="message" type="text" value={formData.message} onChange={handleChange}></textarea>
        </div>

        
  
        <input className="Button" type="submit" value="Send"></input>
      </form>

      <Media fill="#A44234" className="_Contact" />
    </section>
  );
}
