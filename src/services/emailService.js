import nodemailer from 'nodemailer';

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD // Use App Password for Gmail
  }
});

export const sendSubscriptionNotification = async (subscriberEmail) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'New Neuron Notes Subscriber! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #18181b;">New Subscriber Alert!</h2>
          <p style="color: #3f3f46;">Someone just subscribed to Neuron Notes:</p>
          <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #18181b;"><strong>Email:</strong> ${subscriberEmail}</p>
            <p style="margin: 10px 0 0 0; color: #18181b;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #3f3f46;">Keep spreading the knowledge! 🚀</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 