import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"


type Session = {
  user: {
    /** The user's postal address. */
    address: string
  }
}


const NextAuth = ({ children, session }: { children: ReactNode, session: any }) => {
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}

export default NextAuth
