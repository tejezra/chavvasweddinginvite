import Hero from './components/Hero'
import EventSchedule from './components/EventSchedule'
import AmbientToggle from './components/AmbientToggle'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <AmbientToggle />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="events">
          <EventSchedule />
        </section>
      </main>
    </div>
  )
}
