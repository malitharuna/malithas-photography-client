
import './App.css';

import 'react-photo-view/dist/react-photo-view.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';

function App() {
  return (
    <div>
       <RouterProvider router={router}>

       </RouterProvider>
    </div>
  );
}

export default App;



