import React from 'react'
import { EyeSvg, FullScreenSvg, IconButton } from 'common'

const CenterMenu: React.FC = () => {
  return (
    <div className={'w-lg flex justify-center'}>
      <IconButton type={'preview'} classname={'mr-rl'}>
        <EyeSvg />
      </IconButton>
      <IconButton type={'fullscreen'} classname={'mr-rl'}>
        <FullScreenSvg />
      </IconButton>
    </div>
  )
}

export default CenterMenu
