import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home/Home';
import Form from './components/Form/Form';

import store from './redux/store';
import AppContextProvider from './context/appContext';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContextProvider>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/crear' element={<Form />} />
              <Route path='/editar' element={<Form />} />
            </Route>
          </Routes>
        </AppContextProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
