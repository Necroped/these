import Guest from '#models/guest'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Guest.create({
      email: 'test@test.com',
    })
  }
}
