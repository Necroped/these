import ProfileForm from '../components/profile_form'
import Login from '../components/login'
import Logout from '../components/logout'
import { AuthenticationContextProvider } from '../context/authentication_context'
import Guest from '../../app/models/guest'

const Home = ({ user }: { user: Guest }) => {
  return (
    <>
      <AuthenticationContextProvider user={user}>
        {(isAuth: boolean) =>
          isAuth ? (
            <>
              <Logout />
              <ProfileForm />
            </>
          ) : (
            <Login />
          )
        }
      </AuthenticationContextProvider>
    </>
  )
}

export default Home
