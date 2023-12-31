import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import path from '../../constants/path'
import classNames from 'classnames'
const SideBar = () => {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside
      className={classNames(
        'h-screen sticky top-0 z-30 flex-shrink-0 overflow-y-auto bg-white lg:block  transition-all overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]',
        {
          'w-[200px]': expanded
        }
      )}
    >
      <div>
        <div
          className={classNames(
            'h-[72px] flex items-center px-6 text-black border-b-[1px] border-gray-300',
            {
              'justify-between': expanded,
              'justify-center': !expanded
            }
          )}
        >
          <Link
            to={path.home}
            className='text-lg font-bold text-black flex items-center justify-between'
          >
            <span
              className={classNames('text-[#12b2b7] ml-4 font-semibold text-[20px]', {
                hidden: !expanded
              })}
            >
              Tinycrm
            </span>
          </Link>
          <button onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? (
              <svg
                className='h-6 w-6'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.25 7.5L16 12L20.25 16.5M3.75 12H12M3.75 17.25H16M3.75 6.75H16'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </button>
        </div>
        <div className='p-6'>
          <ul className='flex flex-col gap-2 text-black'>
            <li className='py-2'>
              <NavLink
                to={path.home}
                className={({ isActive }) =>
                  classNames(
                    'flex w-full h-[24px] items-center text-sm font-semibold hover:text-[#12b2b7] overflow-hidden transition-all',
                    {
                      'text-[#12b2b7]': isActive
                    }
                  )
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-[#26C6DA]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                  />
                </svg>
                <span
                  className={classNames('overflow-hidden', {
                    'ml-4': expanded,
                    'w-0': !expanded
                  })}
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li className='py-2'>
              <NavLink
                to={path.role}
                className={({ isActive }) =>
                  classNames(
                    'flex w-full h-[24px] items-center text-sm font-semibold hover:text-gray-200 overflow-hidden transition-all',
                    {
                      'text-[#12b2b7]': isActive
                    }
                  )
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-[#26C6DA]'
                  viewBox='0 0 32 32'
                >
                  <path
                    fill='currentColor'
                    d='M28.07 21L22 15l6.07-6l1.43 1.41L24.86 15l4.64 4.59L28.07 21zM22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z'
                  />
                </svg>
                <span
                  className={classNames('overflow-hidden', {
                    'ml-4': expanded,
                    'w-0': !expanded
                  })}
                >
                  Roles
                </span>
              </NavLink>
            </li>
            <li className='py-2'>
              <NavLink
                to={path.user}
                className={({ isActive }) =>
                  classNames(
                    'flex w-full h-[24px] items-center text-sm font-semibold hover:text-gray-200 overflow-hidden transition-all',
                    {
                      'text-[#12b2b7]': isActive
                    }
                  )
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-[#26C6DA]'
                  viewBox='0 0 256 256'
                >
                  <path
                    fill='currentColor'
                    d='m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120Zm-48-32.43L57.3 64L128 40.43L198.7 64Z'
                  />
                </svg>
                <span
                  className={classNames('overflow-hidden', {
                    'ml-4': expanded,
                    'w-0': !expanded
                  })}
                >
                  User
                </span>
              </NavLink>
            </li>
            <li className='py-2'>
              <NavLink
                to={path.product}
                className={({ isActive }) =>
                  classNames(
                    'flex w-full h-[24px] items-center text-sm font-semibold hover:text-gray-200 overflow-hidden transition-all',
                    {
                      'text-[#12b2b7]': isActive
                    }
                  )
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-[#26C6DA]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
                  />
                </svg>
                <span
                  className={classNames('overflow-hidden', {
                    'ml-4': expanded,
                    'w-0': !expanded
                  })}
                >
                  Product
                </span>
              </NavLink>
            </li>
            <li className='py-2'>
              <NavLink
                to={path.account}
                className={({ isActive }) =>
                  classNames(
                    'flex w-full h-[24px] items-center text-sm font-semibold hover:text-gray-200 overflow-hidden transition-all',
                    {
                      'text-[#12b2b7]': isActive
                    }
                  )
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-[#26C6DA]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                  />
                </svg>
                <span
                  className={classNames('overflow-hidden', {
                    'ml-4': expanded,
                    'w-0': !expanded
                  })}
                >
                  Lead
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
