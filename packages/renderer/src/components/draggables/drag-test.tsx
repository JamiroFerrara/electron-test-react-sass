import React from 'react'
import useDrag from '../../hooks/useDrag'
import {useState} from 'react'

const fileName = "drag-and-drop.md"

function DragTest() {
  useDrag("")

  return (
    <>
      <div onClick={() => handleOnPress()} draggable="true" id="drag" className="hello">Drag me!</div>
    </>
  )
}

function handleOnPress() {
  console.log("Item Pressed!")
}

export default DragTest
