
# TAG App

TAG App is a lightweight, web-based Point-of-Sale (POS) application designed for simplicity and efficiency. Built with React, TypeScript, and Vite, it integrates with Stripe for payment processing and Twilio for SMS-based functionalities.

## Features

- **Modern Tech Stack**: Utilizes React with TypeScript and Vite for a fast and efficient development experience.
- **Tailwind CSS**: For rapid UI development and responsive design.
- **Stripe Integration**: Seamless payment processing capabilities with POS features.
- **Twilio Integration**: SMS functionalities for notifications and verifications.
- **Netlify Deployment**: Easily deployable with Netlify for quick previews and production builds.

## Installation

Follow these steps to get started locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/dudeitsandy/tagapp.git
   cd tagapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Refer to a `.env.example` file (to be created) for the required variables (e.g., Stripe/Twilio keys).

4. Run the development server:

   ```bash
   npm run dev
   ```

## Testing

Instructions for testing will be provided here once testing scripts and procedures are established.

## Deployment

The application is configured for deployment on Netlify:

- Push your code to your GitHub repository.
- Connect the repository to Netlify.
- Set up your environment variables in the Netlify dashboard.
- Deploy your site.

Alternatively, you can host the backend on AWS (Amplify recommended) and use the Netlify frontend.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

proprietary software 

## Contact

For questions or inquiries, please contact:

- Andy Styx: andy@ghostweave.com

## Future Improvements

- Implement Stripe POS flow with actual charge processing.
- Integrate Twilio for phone verification and notifications.
- Add testing scripts for CI/CD pipelines.
- Create a `.env.example` file as a reference for required environment variables.

Happy coding!