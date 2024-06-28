import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
      <Link href="/" className='font-bold text-xl h-12 flex items-center'>
      STAR SERIGRAFIA
      </Link>
      <div className="flex items-center gap-8">
    <SignedIn>
      <UserButton/>
    </SignedIn>
    <SignedOut>
      <SignInButton mode='modal'>
        <div className="rounded-md border border-gray-400 px-3 py-2">
          Fazer Login
        </div>
      </SignInButton>
    </SignedOut>
      </div>
    </nav>
  )
}
