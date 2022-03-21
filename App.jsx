
import { Provider } from 'react-redux';
import './App.css'
import store from './redux/store';
import Dashboard from './routers/Dashboard';


function App() {
  return (
    <Provider store = {store}>
      <Dashboard/>
    </Provider>
  );
}

export default App;
