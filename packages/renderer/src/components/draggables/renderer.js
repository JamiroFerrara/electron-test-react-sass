document.getElementById('drag').ondragstart = (event) => {
  event.preventDefault()
  window.electron.startDrag('/home/stiwie/Videos/Mayday/Logo/Mayday.mp4')
}
