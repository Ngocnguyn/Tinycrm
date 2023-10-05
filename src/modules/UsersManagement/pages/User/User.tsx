import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'

const User = () => (
  <Fragment>
    <Helmet>
      <title>User</title>
      <meta name='description' content='This is user management page of the project' />
    </Helmet>
  </Fragment>
)

export default User
