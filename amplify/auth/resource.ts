import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email : {
      verificationEmailStyle: 'CODE',
      verificationEmailSubject: "Welcome to the AI-Powered Recipe Generator!",
      verificationEmailBody : (createCode) =>
        `Hello! Your verification code is: ${createCode}. Please enter this code to complete your login. This code will expire in 15 minutes. If you did not request this code, please ignore this email.`,
    },
  }
});