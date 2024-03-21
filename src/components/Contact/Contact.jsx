import Media from '../Media/Media';
import './Contact.scss';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const recaptchaRef = useRef(); // Создаем ссылку на компонент ReCAPTCHA

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Вызываем execute для получения токена
    recaptchaRef.current.execute();
  };

  const handleRecaptchaChange = async (token) => {
    // Отправляем данные формы на сервер
    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken: token }), // Используем полученный токен
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section>
      <h2>Get in touch</h2>
      <form className="Contact" onSubmit={handleSubmit}>
        <div>
          <div className="formItem">
            <label>Name</label>
            <input type="text" name="name" className="input" placeholder="" required onChange={handleChange} />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" name="email" className="input" placeholder="" required onChange={handleChange} />
          </div>
        </div>

        <div id="formText">
          <label>Message</label>
          <textarea name="message" type="text" onChange={handleChange}></textarea>
        </div>

        {/* ReCAPTCHA компонент */}
        <ReCAPTCHA
          ref={recaptchaRef} // Привязываем ссылку к компоненту ReCAPTCHA
          sitekey="6Ldc2nwpAAAAAFDlc2xhK42D8A-jxDGXhdrXz_Bn"
          onChange={handleRecaptchaChange}
          size="invisible"
        />

        <input className="Button" type="submit" value="Send"></input>
      </form>

      <Media fill="#A44234" className="_Contact" />
    </section>
  );
}
