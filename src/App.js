import './App.css';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Main from './containers/main'
function App() {
 
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className='App'>
        
      

    <div className="header-container">
      <h1 className="header-title">Expense Tracker</h1>
    </div>


</div>


      
      
      <Main/>
      
      </PersistGate>
      </Provider>
  ) ;

}

export default App;
