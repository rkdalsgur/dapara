'use client'

import Header from './Header'
import CartSidebar from './CartSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { hideLoading } from '@/redux/slices/cartSlice'
import { usePathname } from 'next/navigation'

export default function App({ children }) {
  const dispatch = useDispatch()
  const { cartItems, loading } = useSelector((state) => state.cart)
  const pathname = usePathname()

  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])

  return (
    <div>
      <div
        className={`${
          loading
            ? ''
            : cartItems.length > 0 &&
              (pathname === '/' || pathname.indexOf('/product/') >= 0)
            ? 'mr-32'
            : ''
        }`}
      >
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <CartSidebar />
    </div>
  )
}
