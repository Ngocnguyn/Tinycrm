import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='flex bg-gray-50 relative'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
