import Event from '#models/event'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    const startTime = DateTime.fromISO('2023-05-30T18:00:00.000')
    await Event.create({
      location: 'Lieu',
      startTime,
      endTime: startTime.plus({ hours: 3 }),
    })
  }
}
