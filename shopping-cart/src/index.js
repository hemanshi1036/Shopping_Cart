import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/Slices/Store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Toaster} from 'react-hot-toast'
import { FirebaseProvider } from './Context/Firebase';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
   
    <Provider store={store}>
        <FirebaseProvider>
            <App />
            <Toaster/>
        </FirebaseProvider>
               
    </Provider>
</BrowserRouter>
 
   

);

