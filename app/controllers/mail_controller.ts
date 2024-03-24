//import type { HttpContext } from '@adonisjs/core/http'
import { HttpContext } from '@adonisjs/core/http'
import { Message } from '@adonisjs/mail'
import mail from '@adonisjs/mail/services/main'

export default class MailController {
  async send({ request }: HttpContext) {
    const { recipients, subject, message } = request.all()
    await mail.send((mailMessage: Message) => {
      mailMessage.cc(recipients.join()).subject(subject).html(message)
    })
  }
}
