import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface LoginForm {
  userNameOrEmail: string
  password: string
}
interface Props {
  register: UseFormRegister<LoginForm>
  errors: FieldErrors<LoginForm>
}
const LoginForm = ({ register, errors }: Props) => {
  return (
    <div className=''>
      <div className='flex flex-col mb-4'>
        <label htmlFor='email' className='mb-1 text-xs tracking-wide text-gray-600'>
          Username:
        </label>
        <div className='relative flex items-center justify-center'>
          <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>
          </div>
          <input
            id='email'
            type='text'
            className='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
            placeholder='Enter your email'
            {...register('userNameOrEmail')}
          />
        </div>
        <span className='block min-h-[16px] px-8 text-red-700 text-xs mt-1 font-normal'>
          {errors.userNameOrEmail?.message}
        </span>
      </div>
      <div className='flex flex-col mb-5'>
        <label htmlFor='password' className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'>
          Password:
        </label>
        <div className='relative flex items-center justify-center'>
          <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          </div>
          <input
            id='password'
            type='password'
            className='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
            placeholder='Enter your password'
            {...register('password')}
          />
        </div>
        <span className='block min-h-[16px] px-8 text-red-700 text-xs mt-1 font-normal'>
          {errors.password?.message}
        </span>
      </div>
      <div className='flex w-full'>
        <button
          type='submit'
          className='flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in'
        >
          <span className='mr-2 uppercase'>Sign In</span>
          <span>
            <svg
              className='h-6 w-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default LoginForm
