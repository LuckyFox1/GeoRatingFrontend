// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import AdminRoute from './Admin'
import LoginRoute from './Login'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    AdminRoute(store),
    LoginRoute(store)
  ]
})

export default createRoutes
