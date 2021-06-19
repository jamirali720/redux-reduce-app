import './App.scss';
import Home from './components/Home/Home';
import ReducerCount from './components/ReducerCount/ReducerCount';
import ManagementPatients from './components/Patients/ManagementPatients';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Home></Home>
      <ReducerCount></ReducerCount>
      <ManagementPatients></ManagementPatients>
      <Cart></Cart>
      <Shop></Shop>
    </div>
  );
}

export default App;
