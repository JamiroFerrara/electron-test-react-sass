import React from 'react'
import {useEffect} from 'react'

const fileName = "drag-and-drop.md"

export default function DragTest() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "/home/stiwie/Github/electron/electron-test-react-sass/packages/renderer/src/components/draggables/renderer.js"
    script.async = true;
    document.body.appendChild(script);
  })


  return (
    <>
      <div onClick={() => handleOnPress()} draggable="true" id="drag" className="hello">hello</div>
    </>
  )
}

function handleOnPress() {
  console.log("Item Pressed!")
}
