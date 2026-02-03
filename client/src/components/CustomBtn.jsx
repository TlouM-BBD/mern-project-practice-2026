import React from 'react'

export default function CustomBtn({title,onClick}) {
  return (
    <button onClick={onClick}>{title}</button>
  )
}
