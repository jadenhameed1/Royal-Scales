# Royal-Scales
jadenhameed@MacBook-Pro-2 ~ % node -v
node -v
npm -v

v22.20.0
v22.20.0
10.9.3
jadenhameed@MacBook-Pro-2 ~ % 
jadenhameed@MacBook-Pro-2 ~ % # make a folder
mkdir my-first-app
cd my-first-app

# create a Next.js app (full-stack framework)
npx create-next-app@latest .

zsh: command not found: #
zsh: invalid mode specification
Need to install the following packages:
create-next-app@15.5.4
Ok to proceed? (y) 

✔ Would you like to use TypeScript? … No / Yes
✔ Which linter would you like to use? › None
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack? (recommended) … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /Users/jadenhameed/my-first-app.

Using npm.

Initializing project with template: app-tw 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss


added 53 packages, and audited 54 packages in 7s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created my-first-app at /Users/jadenhameed/my-first-app

npm notice
npm notice New major version of npm available! 10.9.3 -> 11.6.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.6.1
npm notice To update run: npm install -g npm@11.6.1
npm notice
jadenhameed@MacBook-Pro-2 my-first-app % npm run dev


> my-first-app@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.5.4 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.254.24:3000

 ✓ Starting...
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

 ✓ Ready in 761ms
 ○ Compiling / ...
 ✓ Compiled / in 2.1s
 GET / 200 in 2346ms
 ✓ Compiled /favicon.ico in 190ms
 GET /favicon.ico?favicon.0b3bf435.ico 200 in 472ms
git init
git add .
git commit -m "first app"
git branch -M main
git remote add origin [https://vercel.com/jaden-hameeds-projects/royal-scales/FNPMTVqeGMoB7PXrfoiFCrNWCDam](https://vercel.com/jaden-hameeds-projects/royal-scales/FNPMTVqeGMoB7PXrfoiFCrNWCDam)
git push -u origin main

cd my-first-app

git init
git add .                            
git commit -m "first commit"
git branch -M main
git remote add origin https://vercel.com/jaden-hameeds-projects/royal-scales/FNPMTVqeGMoB7PXrfoiFCrNWCDam
git push -u origin main
npm run dev
git add .
git commit -m "Updated homepage text"
git push
npm install next-auth
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}
...
callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}
...
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data } = useSession()
  const { accessToken } = data

  return <div>Access Token: {accessToken}</div>
}
NEXTAUTH_URL=[https://royal-scales.vercel.app/](https://vercel.com/jaden-hameeds-projects/royal-scales/FNPMTVqeGMoB7PXrfoiFCrNWCDam)
npm install next-auth
