import { sendSubscriptionNotification } from '../../services/emailService';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Here you would typically save the email to your database
    // For now, we'll just send the notification email

    await sendSubscriptionNotification(email);

    return res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ message: 'Error processing subscription' });
  }
} 