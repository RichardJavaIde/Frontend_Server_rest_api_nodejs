import {createBrowserRouter} from 'react-router-dom';    
import Layout from './layouts/layout';
import Products from './Views/Products';
import NewProduct, {action as newProducAction } from './Views/NewProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'new-product/new',
                element: <NewProduct />
                ,action: newProducAction
            }
        ]
  },
])