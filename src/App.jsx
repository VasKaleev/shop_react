import { Header } from './Header';
import { BestSellers } from './BestSellers';
import { Product } from './Product';
import { Reviews } from './Reviews'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BestSellers />
  },
  {
    path: "/product/:prId",
    element: <Product />
  }
]);

function App() {

  return (
    <div className="appContainer">
      <Header />
      <hr className='divider' />
      <RouterProvider router={router} />
      <Reviews />
    </div>
  );
}

export default App;
