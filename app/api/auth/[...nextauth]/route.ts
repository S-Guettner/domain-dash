import NextAuth, { AuthOptions, SessionOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import user from "../../../data/userModel";

/* google auth */
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const userCheck = await user.findOne({ email: credentials?.email });

        if (userCheck) {
          const isValid = bcrypt.compareSync(
            credentials?.password,
            userCheck?.password
          );
          if (isValid) {
            return { id: userCheck._id, email: userCheck.email };
          } else {
            throw new Error("Invalid password");
          }
        } else {
          const hashedPassword = bcrypt.hashSync(credentials?.password, 10);
          const newUser = await user.create({
            email: credentials?.email,
            password: hashedPassword,

          });
          console.log("User not in DB, created new user");
          return { id: newUser.id, email: newUser.email };
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,

/*   callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const userEmail = user?.email;

        const userCheck = await userTest.findOne({ email: userEmail });

        if (!userCheck) {
          await user.create({
            email: userEmail,
          });
          console.log("User not in DB");
        } else {
          console.log("User already in DB");
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  }, */
});

export { handler as GET, handler as POST };
