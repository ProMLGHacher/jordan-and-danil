import { Provider } from 'react-redux'
import MainPage from '../pages/main/MainPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import Reg from '../pages/reg/Reg'

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
])

const nonAuthRouter = createBrowserRouter([
  {
    path: '/',
    element: <Reg />
  }
])


function App() {


  authRouter
  return (
    <Provider store={store}>
      <RouterProvider router={nonAuthRouter} />
    </Provider>
  )
}

export default App
