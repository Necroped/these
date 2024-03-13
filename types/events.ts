import Guest from '#models/guest'

declare module '@adonisjs/core/types' {
  interface EventsList {
    'guest:registered': Guest
  }
}
