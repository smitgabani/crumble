import './css/App.css';
import React from 'react';
import process from 'process';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import HomeFeedPage from './pages/HomeFeedPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeFeedPage />
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
