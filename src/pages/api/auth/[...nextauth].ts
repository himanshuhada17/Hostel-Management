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
      clientId: "eb4c92fee244d162b222",
      clientSecret: "5db2407755e45888223c92e68d20d2ec1f290d54",
    }),
  ],
};
export default NextAuth(authOptions);
