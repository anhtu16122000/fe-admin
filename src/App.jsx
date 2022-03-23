
import { Provider } from 'react-redux';
import './App.css'
import store from './redux/store';
import Dashboard from './routers/Dashboard';
import Routers from './routers'


function App() {
  return (
    <Provider store = {store}>
      <Routers/>
    </Provider>
  );
}

export default App;
