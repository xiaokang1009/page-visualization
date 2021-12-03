import React from 'react'
import { Page } from 'common'
import LeftMenu from './LeftMenu'
import CenterMenu from './CenterMenu'
import { RightMenu } from './RightMenu'

const MenuBar: React.FC = () => {
  return (
    <div className={'bg-wt border-gr border-b border-solid '}>
      <Page.Center className={'w-9/10 h-sm border-l border-solid  border-gr border-r'}>
        <div className={'flex items-center w-full h-full'}>
          <LeftMenu />
          <CenterMenu />
          <RightMenu />
        </div>
      </Page.Center>
    </div>
  )
}
export default MenuBar
