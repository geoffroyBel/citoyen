import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      roleId: number;
    } & DefaultSession[1];
  }
}

declare module "next-auth" {
  interface Session {
    user: CustomUser;
  }

  interface CustomUser2 extends User  {
    id: int;
    fullname: string;
    avatar?: string;
    longitude?: string;
    latitude?: string;
    adress?: string;
    password: string;
    avatar?: string;
    email: string;
    roleId: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    roleId: number;
  }
}