import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <UserForm/>
      <UserList/>
    </div>
  );
}

export default App;