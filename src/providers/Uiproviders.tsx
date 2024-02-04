'use client'

import {NextUIProvider} from '@nextui-org/react'


const Uiproviders = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>

      {children}
    </NextUIProvider>
  )
}

export default Uiproviders