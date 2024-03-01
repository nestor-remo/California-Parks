import './App.css'
import Board from './components/Board'

const App = () => {

  return (
    <div className='App'>
      <h1> Welcome to California! </h1>
      <h2> Here you will find nearby parks in the area: </h2>
      <br />
      <Board />
    </div>
  )
}

export default App
