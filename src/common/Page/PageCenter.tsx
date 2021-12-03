import React from 'react'

interface PageCenterProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export const PageCenter: React.FC<PageCenterProps> = (props: PageCenterProps) => {
  const { children, className = '' } = props
  return <div className={`${className} mx-auto`}>{children}</div>
}
