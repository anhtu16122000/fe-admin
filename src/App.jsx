
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './App.css'
import store, { persistor } from './redux/store';
import Routers from './routers'


function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading = {null} persistor = { persistor } >
        <Routers/>
      </PersistGate>
    </Provider>
  );
}

export default App;
