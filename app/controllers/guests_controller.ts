// import type { HttpContext } from '@adonisjs/core/http'

import Guest from '#models/guest'
import { HttpContext } from '@adonisjs/core/http'

export default class GuestsController {
  async show({ request, response }: HttpContext) {
    const { email } = request.all()
    const user = await Guest.findByOrFail('email', email)
    return response.json(user)
  }

  async store({ request, response, auth }: HttpContext) {
    const newUser = request.all()
    const current = auth.user
    if (current) {
      const updatedUser = await current.fill(newUser).save()
      return response.json({ isSuccess: true, user: updatedUser })
    }
    const createdUser = await Guest.updateOrCreate({ email: newUser?.email }, newUser)
    return response.json({ isSuccess: true, user: createdUser })
  }
}
