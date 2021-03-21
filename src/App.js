import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Ass1 from './Ass1'

function App({name, age}) {

  return <div>
          <Ass1 firstname={name} age={age-5}></Ass1>
          <br/>
          </div>
}

export default App;
