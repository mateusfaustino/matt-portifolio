import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import SpacingProvider from './contexts/SpacingContext'
 import Navbar from './components/styleguide/molecules/navbar'
 import Home from './pages/home/index'
 import Categories from './pages/categories'
 import ScreenProvider from './contexts/Screen'
 import Footer from './components/styleguide/molecules/footer'
 
 import Post from './components/post'
import post from './database/posts/1'
const App = ()=>{
  return (
    <BrowserRouter>
      <ScreenProvider>
      <SpacingProvider>
        <GlobalStyle/>
        <Navbar/>
          <Switch id='switchTag'>
            <Route path='/' exact component={Home}/>
            <Route path='/post/:urlSlug' exact component={Post}/>
            <Route path='/page/:pageNumber' exact component={Home}/>
            <Route path='/category/:urlSlug' exact component={Categories}/>
          </Switch>
          <Footer/>
        </SpacingProvider>
      </ScreenProvider>
    </BrowserRouter>
  )
}

export default App;
