import Button from './components/Button.jsx'

const App = () => {
  return (
    <div>
    <h1>Hello_world!!!</h1>

    <Button text="Submit button" onClick={() => alert('Submit button clicked')} />
    <Button text="Reset button" onClick={() => alert('Reset button clicked')} />
    </div>
  )
}

export default App