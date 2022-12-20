import Navbar from './navbar'
import Footer from './footer'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{marginTop: "3rem"}}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;