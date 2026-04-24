import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { getGuest, createGuest } from '@/app/_lib/data-service'

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
    },
    async signIn({ user }) {
      try {
        const existingGuest = await getGuest(user.email)
        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name
          })
        }
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    },
    async session({ session }) {
      const guest = await getGuest(session.user.email)
      session.user.guestId = guest.id
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST }
} = NextAuth(options)
