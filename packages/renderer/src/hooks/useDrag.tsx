import {useEffect} from 'react'

const src = "/home/stiwie/Github/electron/electron-test-react-sass/packages/renderer/src/components/draggables/renderer.js"

const useDrag = (uri: string) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    script.async = true;

    document.body.appendChild(script);
  })

  return src
}

export default useDrag
