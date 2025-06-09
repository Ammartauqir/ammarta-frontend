from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_APP_PASSWORD')

mail = Mail(app)

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()
        email = data.get('email')

        if not email:
            return jsonify({'message': 'Email is required'}), 400

        # Send notification email
        msg = Message(
            'New Neuron Notes Subscriber! 🎉',
            sender=os.getenv('EMAIL_USER'),
            recipients=[os.getenv('EMAIL_USER')]  # Send to yourself
        )
        
        msg.html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #18181b;">New Subscriber Alert!</h2>
            <p style="color: #3f3f46;">Someone just subscribed to Neuron Notes:</p>
            <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #18181b;"><strong>Email:</strong> {email}</p>
                <p style="margin: 10px 0 0 0; color: #18181b;"><strong>Time:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
            </div>
            <p style="color: #3f3f46;">Keep spreading the knowledge! 🚀</p>
        </div>
        """
        
        mail.send(msg)
        
        return jsonify({'message': 'Subscription successful'}), 200

    except Exception as e:
        print(f"Error processing subscription: {str(e)}")
        return jsonify({'message': 'Error processing subscription'}), 500

if __name__ == '__main__':
    app.run(debug=True) 