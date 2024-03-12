import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Head from "./components/Head"
import Body from "./components/Body"
import store from './utils/store'
import { Provider } from "react-redux"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainConatiner from './components/MainConatiner'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [{
      path: "/",
      element: <MainConatiner />
    },
    {
      path: "watch",
      element: <WatchPage />

    }]


  }
]
)


function App() {

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
