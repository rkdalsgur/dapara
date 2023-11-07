'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function Header() {
  const { loading, cartItems } = useSelector((state) => state.cart)
  const pathname = usePathname()

  return (
    <header>
      <nav className="flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white">
        <Link href="/" className="text-lg font-bold">
          DAPARA
        </Link>
        <div>
          Cart
          <span className="cart-badge">
            {loading ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href="/cart">
            <svg fill="#ffffff" width="60px" height="0px"></svg>
          </Link>
          {!loading && cartItems.length > 0 && pathname !== '/cart' && (
            <div className="w-0 h-0 border-8 border-solid border-transparent border-r-gray-300 dark:border-r-gray-900 absolute ml-[73px] -mt-5"></div>
          )}
        </div>
      </nav>
    </header>
  )
}
