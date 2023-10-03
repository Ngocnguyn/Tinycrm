import { Fragment, useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Helmet } from 'react-helmet-async'
import LoginForm from '../../components/LoginForm'
import { AppContext } from 'src/modules/Share/contexts/app.context'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { FormLoginSchema, FormLoginType } from '../../utils/rules'
import authAPI from '../../services/auth.service'
import path from 'src/modules/Share/constants/path'
import { isAccountLockedOutError, isUserNameNotFoundError } from 'src/modules/Share/utils/utils'
import { toast } from 'react-toastify'
const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormLoginType>({
    resolver: yupResolver(FormLoginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: FormLoginType) => {
      return authAPI.login(body)
    }
  })

  const handleSubmitForm = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        toast.success('Login successfully!')
        setIsAuthenticated(true)
        navigate(path.home)
      },
      onError: (error: any) => {
        console.log(data)

        if (isUserNameNotFoundError(error.response?.data.code)) {
          setError('userNameOrEmail', {
            message: 'Account with provided information does not exist!',
            type: 'Server'
          })
        }
        if (isAccountLockedOutError(error.response?.data.code)) {
          setError('userNameOrEmail', {
            message: 'Account is locked out!',
            type: 'Server'
          })
        }
      }
    })
  })

  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='This is login page of the project' />
      </Helmet>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
        <div className='flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md'>
          <div className='font-medium self-center text-xl sm:text-3xl text-gray-800'>
            Welcome Back
          </div>
          <div className='mt-4 self-center text-xl sm:text-sm text-gray-800'>
            Enter your credentials to access your account
          </div>
          <div className='mt-10'>
            <form onSubmit={handleSubmitForm}>
              <LoginForm register={register} errors={errors} />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
