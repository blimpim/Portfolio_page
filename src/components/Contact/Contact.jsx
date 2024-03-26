import Media from '../Media/Media';
import './Contact.scss';

// import { useState, useRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact(props) {
  /*const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const recaptchaRef = useRef(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    recaptchaRef.current.execute();
  };

  const handleRecaptchaChange = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken: token }), 
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };*/

  function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Кодирование данных для URL
    let emailBody = 'Name: ' + encodeURIComponent(name) +
                    '%0AEmail: ' + encodeURIComponent(email) +
                    '%0A%0AMessage: ' + encodeURIComponent(message);
  
    // Создание ссылки mailto
    let mailtoLink = 'mailto:blimpim@gmail.com.com?subject=' +
                     encodeURIComponent('Job opportunity from ' + name) +
                     '&body=' + emailBody;
  
    // Открытие ссылки
    window.location.href = mailtoLink;
  }
  

  return (
    <section id={props.id}>
      <h2>Get in touch</h2>
      <form className="Contact" >
        <div>
          <div className="formItem">
            <label>Name</label>
            <input type="text" name="name" id='name' className="input" placeholder="John Doe"  />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" name="email" id='email' className="input" placeholder="johndoe@gmail.com" />
          </div>
        </div>

        <div id="formText">
          <label>Message</label>
          <textarea name="message" type="text" id='message' placeholder="Your message here..."></textarea>
        </div>

        
        {/* <ReCAPTCHA
          ref={recaptchaRef} 
          sitekey="6Ldc2nwpAAAAAFDlc2xhK42D8A-jxDGXhdrXz_Bn"
          onChange={handleRecaptchaChange}
          size="invisible"
        /> */}

        <input className="Button" type="submit" value="Send" onClick={sendEmail}></input>
      </form>

      <Media fill="#A44234" className="_Contact" />
    </section>
  );
}
