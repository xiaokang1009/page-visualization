import React from 'react'
import { Button, SavePageSvg } from 'common'

export const RightMenu: React.FC = () => {
  return (
    <div className={'flex justify-end flex-auto'}>
      <Button
        classname={
          'flex items-center justify-center bg-bl w-sm h-ssm rounded shadow-sm hover:bg-bls hover:border-bll mr-sm'
        }>
        <SavePageSvg />
        <span className={'ml-3 text-white'}>保存页面</span>
      </Button>
    </div>
  )
}
