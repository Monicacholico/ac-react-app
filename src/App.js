import React, {Component} from 'react';
import Table from './table';
import './App.css';
// import 'camp-css';

class App extends Component {
  render() {
     return(
       <section>
         <h1 className="mint App">Hello App!</h1>
         <Table/>
       </section>

     )
  }
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className="mint">
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link mint"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
