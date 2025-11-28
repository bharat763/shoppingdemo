// import React from 'react'
// import Routes from './Routes'
// import { ToastContainer } from 'react-toastify'
// import { PersistGate } from 'redux-persist/integration/react'
// import { store, persistor} from './reducer/store';
// //import { store,persistor } from './reducer/store'
// import { Provider } from 'react-redux'
// const App = () => {
//   return (
//     <div>
//     <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>

//     <Routes/>
//     <ToastContainer/>
//       </PersistGate>
//     </Provider>
    
//     </div>
//   )
// }

// export default App

import React from 'react';
import Products from './components/products';

function App() {
  return <Products />;
}

export default App;

