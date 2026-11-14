import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/main.tsx'
import BlogPage from './pages/blog/main.tsx'
import Blog1 from './pages/blog/listblog/blog1.tsx'
import Blog2 from './pages/blog/listblog/blog2.tsx'
import Blog3 from './pages/blog/listblog/blog3.tsx'
import Blog4 from './pages/blog/listblog/blog4.tsx'
import QuizzesPage from './pages/quizzes/main.tsx'
import Sports from './pages/quizzes/listquizzes/sports/main.tsx'
import AthleticEasyLevelPage from './pages/quizzes/listquizzes/sports/athletic/medium/main.tsx'
import AthleticMediumLevelPage from './pages/quizzes/listquizzes/sports/athletic/medium/main.tsx'
import AthleticPage from './pages/quizzes/listquizzes/sports/athletic/main.tsx'
import FootballPage from './pages/quizzes/listquizzes/sports/football/main.tsx'
import FootballEasyLevelPage from './pages/quizzes/listquizzes/sports/football/easylevel/main.tsx'
import FootballMediumLevelPage from './pages/quizzes/listquizzes/sports/football/mediumlevel/main.tsx'
import FootballHardLevelPage from './pages/quizzes/listquizzes/sports/football/hardlevel/main.tsx'
import VolleyBall from './components/listquizzes/sports/volleyball/main.tsx'
import VolleyBallEasyLevelPage from './pages/quizzes/listquizzes/sports/volleyball/easylevel/main.tsx'
import VolleyBallMediumLevelPage from './pages/quizzes/listquizzes/sports/volleyball/mediumlevel/main.tsx'
import BasketBallHardLevelPage from './pages/quizzes/listquizzes/sports/basketball/hardlevel/main.tsx'
import BasketBallMediumLevelPage from './pages/quizzes/listquizzes/sports/basketball/main.tsx'
import BasketBallEasyLevelPage from './pages/quizzes/listquizzes/sports/basketball/easylevel/main.tsx'
import BasketBall from './components/listquizzes/sports/basket/main.tsx'
import BadmintonMediumLevelPage from './pages/quizzes/listquizzes/sports/badminton/mediumlevel/main.tsx'
import BadmintonEasyLevelPage from './pages/quizzes/listquizzes/sports/badminton/easylevel/main.tsx'
import Badminton from './components/listquizzes/sports/badminton/main.tsx'
import GumballMediumLevel from './components/listquizzes/cartoon/gumball/mediumlevel/main.tsx'
import GumballEasyLevel from './components/listquizzes/cartoon/gumball/easylevel/main.tsx'
import TomandjerryMediumLevel from './components/listquizzes/cartoon/tomandjerry/mediumlevel/main.tsx'
import SpongebobHardLevel from './components/listquizzes/cartoon/spongebobsquarepants/hardlevel/main.tsx'
import SpongebobMediumLevel from './components/listquizzes/cartoon/spongebobsquarepants/mediumlevel/main.tsx'
import SpongebobEasyLevel from './components/listquizzes/cartoon/spongebobsquarepants/easylevel/main.tsx'
import GumballPage from './pages/quizzes/listquizzes/cartoon/gumball/main.tsx'
import TomandJerryPage from './pages/quizzes/listquizzes/cartoon/main.tsx'
import SpongebobPage from './pages/quizzes/listquizzes/cartoon/spongebobsquarepants/main.tsx'
import CartoonPage from './components/listquizzes/cartoon/main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog/1' element={<Blog1/>}/>
      <Route path='/blog/2' element={<Blog2/>}/>
      <Route path='/blog/3' element={<Blog3/>} />
      <Route path='/blog/4' element={<Blog4/>} />
      <Route path='/quizzes' element={<QuizzesPage/>}/>
      <Route path='/quizzes/sports' element={<Sports/>} />
      <Route path='/quizzes/sports/athletic' element={<AthleticPage/>}/>
      <Route path='/quizzes/sports/athletic/1' element={<AthleticEasyLevelPage/>} />
     <Route path='/quizzes/sports/athletic/2' element={<AthleticMediumLevelPage/>} />
     <Route path='/quizzes/sports/football' element={<FootballPage/>}/>
     <Route path='/quizzes/spots/football/1' element={<FootballEasyLevelPage/>}/>
     <Route path='/quizzes/sports/football/2' element={<FootballMediumLevelPage/>}/>
     <Route path='/quizzes/sports/football/3' element={<FootballHardLevelPage/>}/>
     <Route path='/quizzes/sports/badminton' element={<Badminton/>}/>
     <Route path='/quizzes/spots/badminton/1' element={<BadmintonEasyLevelPage/>}/>
     <Route path='/quizzes/sports/badminton/2' element={<BadmintonMediumLevelPage/>}/>
     <Route path='/quizzes/sports/basketball' element={<BasketBall/>}/>
     <Route path='/quizzes/spots/basketball/1' element={<BasketBallEasyLevelPage/>}/>
     <Route path='/quizzes/sports/basketball/2' element={<BasketBallMediumLevelPage/>}/>
     <Route path='/quizzes/sports/basketball/3' element={<BasketBallHardLevelPage/>}/>
     <Route path='/quizzes/sports/volleyball' element={<VolleyBall/>}/>
     <Route path='/quizzes/spots/volleyball/1' element={<VolleyBallEasyLevelPage/>}/>
     <Route path='/quizzes/sports/volleyball/2' element={<VolleyBallMediumLevelPage/>}/>
       <Route path='/quizzes/cartoon/' element={<CartoonPage/>}/>
      <Route path='/quizzes/cartoon/spongebobsquarepants' element={<SpongebobPage/>}/>
             <Route path='/quizzes/cartoon/spongebobsquarepants/1' element={<SpongebobEasyLevel/>}/>
          <Route path='/quizzes/cartoon/spongebobsquarepants/2' element={<SpongebobMediumLevel/>}/>
          <Route path='/quizzes/cartoon/spongebobsquarepants/3' element={<SpongebobHardLevel/>}/>
           <Route path='/quizzes/cartoon/tomandjerry' element={<TomandJerryPage/>}/>
            <Route path='/quizzes/cartoon/tomandjerry/1' element={<TomandjerryMediumLevel/>}/>
          <Route path='/quizzes/cartoon/tomandjerry/2' element={<TomandjerryMediumLevel/>}/>
           <Route path='/quizzes/cartoon/gumball' element={<GumballPage/>}/>
                    <Route path='/quizzes/cartoon/gumball/1' element={<GumballEasyLevel/>}/>
          <Route path='/quizzes/cartoon/gumball/2' element={<GumballMediumLevel/>}/>


    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
