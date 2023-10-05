import { Suspense, lazy, useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'
import MainLayout from 'src/modules/Share/layouts/MainLayout'
import { AppContext } from '../contexts/app.context'
import AuthenticationLayout from '../layouts/AuthenticationLayout'
import User from 'src/modules/UsersManagement/pages/User'

const Login = lazy(() => import('src/modules/Authentication/pages/Login/Login'))
const Home = lazy(() => import('src/modules/Home/pages'))
const Role = lazy(() => import('src/modules/RolesManagement/pages/Role/Role'))
const NotFound = lazy(() => import('../components/NotFound'))

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <AuthenticationLayout>
              <Suspense>
                <Login />
              </Suspense>
            </AuthenticationLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.home,
          element: (
            <MainLayout>
              <Suspense>
                <Home />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.roles,
          element: (
            <MainLayout>
              <Suspense>
                <Role />
              </Suspense>
            </MainLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <Suspense>
                <User />
              </Suspense>
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '*',
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
