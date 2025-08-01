import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image src={logo} className="size-14" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">The Wild Oasis</span>
    </Link>
  )
}
