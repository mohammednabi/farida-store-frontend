import React from 'react'
import PageTitle from '@/components/PageTitle'
import LayoutTabs from './components/LayoutTabs'

interface cartLayoutProps {
    children : React.ReactNode
}

const layout = ({children}:cartLayoutProps) => {

  

  return (
      <div>
          
          <PageTitle title='cart' />
          <LayoutTabs />
          <div>
              {children}
</div>

    </div>
  )
}

export default layout