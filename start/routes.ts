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
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async ({ inertia, auth }) => {
  await auth.check()
  return inertia.render('home', { user: auth.user })
})

router.post('/edit', [GuestsController, 'store']).use(middleware.auth())
router.post('/login', [GuestSessionController, 'login'])
router.post('/logout', [GuestSessionController, 'logout'])
