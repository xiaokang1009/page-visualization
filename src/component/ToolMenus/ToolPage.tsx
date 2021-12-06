import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import Element from './Element/Element'
import tools from 'utils/tools'
import { Button } from 'common'

const ToolPage: React.FC = () => {
  return (
    <div className={'w-xl'}>
      <div className="bg-wt tools-height overflow-y-scroll overflow-x-hidden scroller">
        <ol className={'flex justify-center flex-wrap'}>
          {tools.map((e, i) => (
            <li key={`el-0${i + 1}`}>
              <Element className={'m-4'} text={e.text}>
                {e.svg}
              </Element>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ToolPage
function DetailedHTMLProps<T>() {
  throw new Error('Function not implemented.')
}
