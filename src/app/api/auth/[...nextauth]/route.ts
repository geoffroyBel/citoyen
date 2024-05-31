import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          role: (profile.role as string) ? profile.role : "user",
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
