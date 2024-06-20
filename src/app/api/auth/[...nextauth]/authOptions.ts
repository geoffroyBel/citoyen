import { AuthOptions, CustomUser, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { JWT } from "next-auth/jwt";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          fullname: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          avatar: profile.picture,
          roleId: 1,
        };
      },
    }),
  ],

  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user } : {token: JWT, user: CustomUser }) {
      if (user) {
        token.id = user.id;
        token.username = user.fullname ?? "";
        token.email = user.email ?? "";
        token.avatar = user.avatar ?? "";
        token.roleId = user.roleId ?? 1;
        token.adress = user.adress ?? "";
        token.latitude = user.latitude ?? "";
        token.longitude = user.longitude ?? "";
        token.isAdmin = user.isAdmin ?? false;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.fullname = token.username;
      session.user.email = token.email;
      session.user.avatar = token.avatar ?? "";
      session.user.roleId = token.roleId;
      session.user.adress = token.adress;
      session.user.latitude = token.latitude;
      session.user.longitude = token.longitude;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
    error: "/error",
  },
};

export default authOptions;