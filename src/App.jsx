import './App.css'
import TrendingComponent from './Features/Trending/views/TrendingComponent'
import CategoryComponent from './Features/category/views/CategoryComponent'
import Header from './Features/header/views/Header'
import Promo from './Features/promo/view/Promo'
// import Preloader from './Features/preload/views/preloader'
import ScrollToTop from './Features/scrollToTop/views/ScrollToTop'
// import SliderSection from './Features/slider/views/SliderSection'

function App() {

  return (
    <>
      {/* <Preloader /> */}
      <ScrollToTop />
      <Header />
      <main>
        {/* <SliderSection /> */}

        <Promo />

        <CategoryComponent />
        <TrendingComponent />
      </main>

    </>
  )
}

export default App
