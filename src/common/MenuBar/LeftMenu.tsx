import React from 'react'
import { BorderLeftSvg, BorderRightSvg, BorderTopSvg, IconButton } from 'common'

const LeftMenu: React.FC = () => {
  return (
    <div className={'w-rl flex'}>
      <IconButton type={'file'} classname={'mr-sm ml-sm'}>
        <BorderTopSvg />
      </IconButton>
      <IconButton type={'left'} classname={'mr-sm'}>
        <BorderLeftSvg />
      </IconButton>
      <IconButton type={'right'} classname={'mr-sm'}>
        <BorderRightSvg />
      </IconButton>
    </div>
  )
}

export default LeftMenu
