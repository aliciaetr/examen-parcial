import './Styles/App.css'
import Card from './Components/Card'
import { Form } from './Components/Form'

function App() {

  return (
    <div className="App">
      <h1>Dime cuál es tu canción favorita!</h1>
      <Form />
      <Card />
    </div>
  )
}

export default App
