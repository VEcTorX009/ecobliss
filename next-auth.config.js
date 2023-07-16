import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
const secret = "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"
export const authOptions = {
  secret: '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', // Add your generated secret here
  providers: [
    GoogleProvider({
      clientId: '570663835166-duov3be3rsb45rsheunvttaei1nbk8fb.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
