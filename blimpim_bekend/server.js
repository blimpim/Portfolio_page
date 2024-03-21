const express = require('express');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cors = require('cors'); // Импорт пакета CORS

const app = express();
const port = 3000;

// Настройка Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Использование CORS middleware

// Обработка запроса на отправку формы
app.post(
  '/submit-form',
  [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email format'),
    check('message').notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message, recaptchaToken } = req.body;

    // Проверка reCAPTCHA токена
    const recaptchaSecret = '6Ldc2nwpAAAAAB5AyRoHE7ovZFi_u9UI-8rpZ0H7';
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`, {
      method: 'POST',
    });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({ errors: [{ msg: 'Failed reCAPTCHA verification' }] });
    }

    // Отправка электронной почты через Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'marnmerku@gmail.com',
        pass: 'mgam byhm xhvv pbuj',
      },
    });

    const mailOptions = {
      from: 'marnmerku@gmail.com',
      to: 'marnmerku@gmail.com',
      subject: 'New form message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Отправка электронной почты через Gmail
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent');
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ errors: [{ msg: 'Error sending email' }] });
    }

    res.json({ message: 'Data submitted and email sent!' });

  }
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
