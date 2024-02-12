import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          email: "himanshuhada17@gmail.com",
          password: "1234",
        }
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: 'eb4c92fee244d162b222',
      clientSecret: '01e1359d001b8e6464162f7cea9c7e282d4f043a',
    }),
  ],
};
export default NextAuth(authOptions);
