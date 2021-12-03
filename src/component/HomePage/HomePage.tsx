import React from 'react'
import { MenuBar, Page } from 'common'

export const HomePage: React.FC = () => {
  return (
    <Page classname={`overflow-hidden`} noPadding>
      <MenuBar />
      <div>banner</div>
      <div>footer</div>
    </Page>
  )
}
