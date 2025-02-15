import Banner from "./components/Banner/Banner"
import BannerText from "./components/Banner/BannerText"
import Blogs from "./components/Blogs/Blogs"
import FAQ from "./components/FAQ/FAQ"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"


const App = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Products />
      <Banner />
      <BannerText />
      <Blogs />
      <FAQ />
      <Footer />

    </main>
  )
}

export default App