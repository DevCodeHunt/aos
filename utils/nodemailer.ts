import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_MAIL = process.env.SMTP_MAIL as string;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD as string;
const SMTP_PORT = process.env.SMTP_PORT;
const SMPT_SERVICE = process.env.SMPT_SERVICE;

export const sendMailToCompany = async (emailData: any) => {
  const { subject, email, html,  attachments } = emailData;

  try {
    const transportConfig = {
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: true,
      service: SMPT_SERVICE,
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(transportConfig);

    const mailOptions = {
      from: SMTP_MAIL,
      to: email,
      subject,
      html,
      attachments
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
  //K15SJAXXCGEGYGMYLMNJC5GF
};
