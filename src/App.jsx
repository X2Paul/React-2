import StatefulComponent from'./components/stateful.jsx';
import StatelessComponent from'./components/stateless.jsx';

const App = () => {
  return (
    <div>
      <StatefulComponent />
      <hr />
      <StatelessComponent message="Hello World!" />
    </div>
  )
}

export default App