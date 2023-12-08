import Image from 'next/image'
import Home from './(client)/home/page'
import NavBar from './_components/NavBar/NavBar'

export default function Main() {
  return (
    <main>
      <NavBar />
      <Home />
    </main>
  )
}
