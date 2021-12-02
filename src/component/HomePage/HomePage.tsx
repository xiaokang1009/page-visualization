import React from 'react'
import { NavBar, Page } from '../../common'

export const HomePage: React.FC = () => {
  return (
    <Page noPadding>
      <NavBar />
      <div>banner</div>
      <div>footer</div>
    </Page>
  )
}
