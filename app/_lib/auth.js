import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],
  callbacks: {
    authorized({ auth }) {
      if (!!auth?.user) return true
    }
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth(options)
