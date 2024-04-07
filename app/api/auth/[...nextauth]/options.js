import GitHubProvider from 'next-auth/providers/github';
export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        console.log('Profile GitHub: ', profile);

        let userRole = 'GitHub User'; //for everyone
        if (profile?.email === 'rita789201131@gmail.com') {
          userRole = 'admin';
        }

        return {
          id: profile.id.toString(),
          name: profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: userRole,
        };
      },
    }),
  ],
  callbacks: {
    //use on server side
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    //use on client side
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
};
