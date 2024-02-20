import PageTitle from '@/components/PageTitle'
import React from 'react'
import UserPagesMenu from './components/UserPagesMenu'

const UserPage = () => {
  return (
      <div>
          <PageTitle title='your account' />
          <UserPagesMenu />
    </div>
  )
}

export default UserPage