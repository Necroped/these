// import type { HttpContext } from '@adonisjs/core/http'

import Guest from '#models/guest'
import { HttpContext } from '@adonisjs/core/http'

export default class GuestSessionController {
  async login({ request, auth, response }: HttpContext) {
    auth.use('guest').logout()
    const newGuest = request.all()
    const guest = await Guest.firstOrCreate({ email: newGuest.email }, newGuest)

    await auth.use('guest').login(guest)
    return response.status(200).json({ isSuccess: true, user: guest })
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('guest').logout()
    return response.json({ isSuccess: true })
  }
}
