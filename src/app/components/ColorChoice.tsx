
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'

interface colorProps{
    name: string
    hex:string
}

const ColorChoice = ({name,hex}:colorProps) => {

   

  return (
   <Link href="#" className="flex items-center gap-2">
  <div
    className={classNames("w-5 h-5")}
              style={{
                  backgroundColor:`${hex}`
              }}
  />
  <h1>{name}</h1>
</Link>
  )
}

export default ColorChoice