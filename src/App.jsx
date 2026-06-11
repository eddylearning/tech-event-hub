import './App.css'
import Navbar from './components/Layouts/Navbar'
import Footer from './components/Layouts/footer'
import ParticlesBackground from './components/ts-particals'

function App() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="app-shell">
        <section className="home-intro">
          <p className="eyebrow">Tech Event Hub</p>
          <h1>Build, discover, and manage tech events.</h1>
          <p className="intro-copy">
                  welcome all</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
