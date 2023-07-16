import GoogleProvider from 'next-auth/providers/google';

const options = {
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

export default options;
