import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='This is role management page of the project' />
      </Helmet>
    </Fragment>
  )
}

export default Home
