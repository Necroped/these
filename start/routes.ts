/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const GuestSessionController = () => import('#controllers/guest_session_controller')
const GuestsController = () => import('#controllers/guests_controller')
const MailController = () => import('#controllers/mail_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import Event from '#models/event'

router.get('/', async ({ inertia, auth }) => {
  await auth.check()
  /** @todo remove this */
  /*   await auth.use('guest').logout() */
  const event = await Event.first()
  return inertia.render('home', { user: auth.user, event: event?.toJSON() })
})

router.post('/edit', [GuestsController, 'store']).use(middleware.auth())
router.post('/login', [GuestSessionController, 'login'])
router.post('/logout', [GuestSessionController, 'logout'])
router.post('/mail', [MailController, 'send'])
