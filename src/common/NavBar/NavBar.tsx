import React from 'react'
import { Page } from 'common'
import Link from 'next/link'

export const NavBar: React.FC = () => {
  return (
    <Page.Center className={`py-3`}>
      <Page flex noPadding>
        <div className={`logo`}>
          <Link href={'/'}>logo</Link>
        </div>
        <ul className={`flex`}>
          <li>
            <Link href={'/'}>首页</Link>
          </li>
        </ul>
      </Page>
    </Page.Center>
  )
}
