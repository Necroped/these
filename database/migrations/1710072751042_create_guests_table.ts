import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'guests'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('email', 254).notNullable().unique()
      table.string('full_name')
      table.boolean('is_coming').defaultTo(false)
      table.boolean('is_accompagnated').defaultTo(false)
      table.text('allergies')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
