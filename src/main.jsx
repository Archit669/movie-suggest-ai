import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import MovieDetails from './components/MovieDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />} />,
    <Route path="/movies/:id" element={<MovieDetails />} />
  ])
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
