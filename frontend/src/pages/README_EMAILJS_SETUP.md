# EmailJS Setup for Contact Form

This document explains how to set up EmailJS for the contact form in the Shopocalypse e-commerce website.

## Steps to Configure EmailJS

1. **Create an EmailJS Account**
   - Go to [EmailJS website](https://www.emailjs.com/) and sign up for an account
   - The free tier allows 200 emails per month which should be sufficient for testing

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services" and click "Add New Service"
   - Connect your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps to connect your email account
   - Note the Service ID that is generated (you'll need this later)

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard and click "Create New Template"
   - Design your email template with the following variables:
     - `{{name}}` - The sender's name
     - `{{email}}` - The sender's email
     - `{{message}}` - The message content
   - Example template:
     ```
     Subject: New Contact Form Submission from {{name}}

     You have received a new message from your website contact form:

     Name: {{name}}
     Email: {{email}}

     Message:
     {{message}}
     ```
   - Save the template and note the Template ID

4. **Get Your User ID (Public Key)**
   - Go to "Account" > "API Keys"
   - Copy your Public Key (this is your USER_ID)

5. **Update the Contact.jsx File**
   - Open the Contact.jsx file in your project
   - Replace the placeholder values with your actual credentials:
     ```javascript
     const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
     const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
     const USER_ID = 'YOUR_USER_ID'; // Replace with your Public Key
     ```

## Testing the Contact Form

After setting up EmailJS:

1. Fill out the contact form on your website
2. Submit the form
3. Check your email to see if you received the message
4. Check the EmailJS dashboard to see if the email was sent successfully

## Troubleshooting

If you encounter any issues:

1. Check the browser console for error messages
2. Verify that your EmailJS credentials are correct
3. Make sure your email service is properly connected
4. Check if you've reached the free tier limit (200 emails/month)

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
