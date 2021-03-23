import './App.css';
import MyComponent from './main.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MyComponent/> 
       {/* That ^ is the base component that has the background of the phone and the add button */}
       {/* it is also the component where you will add all the components what go on top */}
      </header>
    </div>
  );
}

export default App;
