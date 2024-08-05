import logo from './logo.svg';
import './App.css';
import { Props } from './componants/Props';

function App() {
  let p=[{"Name":"Amit"},{"Name":"Anshul"},{"Name":"Deepak"}]
  return (
    <div>
      
      <Props p1={p}/>

    </div>
  );
}

export default App;
