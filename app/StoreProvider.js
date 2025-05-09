'use client';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor  } from './store';

export default function StoreProvide({children}){
  
return <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
    </Provider>
}