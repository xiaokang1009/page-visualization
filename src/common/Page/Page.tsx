import React from 'react'
import { PageCenter } from './PageCenter'
import cn from 'classnames'

interface PageProps {
  children: JSX.Element | JSX.Element[]
  fullHeight?: boolean
  flex?: boolean
  noPadding?: boolean
}

const Page: React.FC<PageProps> & { Center: typeof PageCenter } = (props: PageProps) => {
  const { children, fullHeight, flex, noPadding = false } = props
  const classes = cn({
    flex,
    'min-h-main': fullHeight,
    'py-8': !noPadding
  })
  return <section className={classes}>{children}</section>
}
Page.Center = PageCenter
export default Page
