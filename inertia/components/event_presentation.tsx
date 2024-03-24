import Event from '#models/event'
const EventPresentation = ({ event }: { event: Event }) => {
  return (
    <>
      <h1>{event.text}</h1>
      <h2>{event.location}</h2>
    </>
  )
}

export default EventPresentation
