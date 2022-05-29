import styles from '@/styles/app.module.scss'
import DragTest from './components/draggables/drag-test'

const App = () => {

  console.log("App.js Initialized!")

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <DragTest/>
      </header>
    </div>
  )
}

export default App
