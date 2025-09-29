import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => signOut()}>Logout</button>
      </>
    )
  }
  return (
    <>
      <p>You are not signed in.</p>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </>
  )
}
