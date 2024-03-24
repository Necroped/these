import { AuthenticationContextProvider } from '~/context/authentication_context'
import Guest from '#models/guest'
import Event from '#models/event'
import Button from '~/components/ui/button'
import Container from '~/components/ui/container'
import Checkbox from '~/components/ui/checkbox'
import Input from '~/components/ui/input'
import FormContainer from '~/components/ui/form_container'

const Home = ({ user, event }: { user: Guest; event: Event }) => {
  return (
    <AuthenticationContextProvider user={user}>
      {(isAuth: boolean) => (
        <>
          {event.text}
          <br />
          {isAuth ? <>Co</> : <>Pas co </>}
          <br />
          {/*           <Container variant={'primary'} style={{ transform: 'translateZ(-1px)' }}>
            <EventPresentation event={event} />
            <Login />
          </Container>
          {isAuth && (
            <Container variant={'secondary'} className={css({ background: 'red', width: '1/2' })}>
              <ProfileForm />
              <Logout />
            </Container>
          )} */}
          <Container theme="light">
            <Button>button primary</Button>
            theme 1
            <Checkbox label={'Je viens'} />
            <Input label={'email'} />
          </Container>
          <Container theme="dark">
            <Button>button secondary</Button>
            theme 2
            <FormContainer>
              <Checkbox label={'Je suis accompagné'} />
              <Input label={'name'} />
            </FormContainer>
          </Container>
        </>
      )}
    </AuthenticationContextProvider>
  )
}

export default Home
