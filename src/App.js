
import './App.css';
import AddUser from './component/AddUser';
import Header from './component/Header';
import Search from './component/Search';
import Table from './component/Table';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="container">
            <div className="row">
              <Search></Search>
            </div>
            <div className="row mt-4">
              <Table></Table>
              <AddUser></AddUser>
            </div>
        </div>
    </div>
  );
}

export default App;
