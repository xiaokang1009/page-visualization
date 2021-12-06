import React from 'react'
import { MenuBar, Page } from 'common'
import ToolPage from '../ToolMenus/ToolPage'

export const HomePage: React.FC = () => {
  return (
    <Page classname={`overflow-hidden`} noPadding>
      <MenuBar />
      <Page noPadding>
        <ToolPage />
      </Page>
      <div>footer</div>
    </Page>
  )
}
