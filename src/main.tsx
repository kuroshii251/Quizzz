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
import Badminton from './components/listquizzes/sports/badminton/main.tsx'
import GumballPage from './pages/quizzes/listquizzes/cartoon/gumball/main.tsx'
import SpongebobPage from './pages/quizzes/listquizzes/cartoon/spongebobsquarepants/main.tsx'
import ChemistryEasyLevelPage from './pages/quizzes/listquizzes/sciences/chemistry/easylevel/main.tsx'
import ChemistryMediumLevelPage from './pages/quizzes/listquizzes/sciences/chemistry/mediumlevel/main.tsx'
import ChemistryPage from './pages/quizzes/listquizzes/sciences/chemistry/main.tsx'
import PhysicsMediumLevelPage from './pages/quizzes/listquizzes/sciences/physics/mediumlevel/main.tsx'
import PhysicsEasyLevelPage from './pages/quizzes/listquizzes/sciences/physics/easylevel/main.tsx'
import MathHardLevelPage from './pages/quizzes/listquizzes/sciences/math/hardlevel/main.tsx'
import MathMediumLevelPage from './pages/quizzes/listquizzes/sciences/math/mediumlevel/main.tsx'
import MathEasyLevelPage from './pages/quizzes/listquizzes/sciences/math/easylevel/main.tsx'
import MathPage from './pages/quizzes/listquizzes/sciences/math/main.tsx'
import PhysicsPage from './pages/quizzes/listquizzes/sciences/physics/main.tsx'
import Sciences from './pages/quizzes/listquizzes/sciences/main.tsx'
import ReptilesPage from './pages/quizzes/listquizzes/animals/reptiles/main.tsx'
import ReptilesEasyLevelPage from './pages/quizzes/listquizzes/animals/reptiles/easylevel/main.tsx'
import ReptilesMediumLevelPage from './pages/quizzes/listquizzes/animals/reptiles/mediumlevel/main.tsx'
import MammalMediumLevelPage from './pages/quizzes/listquizzes/animals/mammal/mediumlevel/main.tsx'
import MammalEasyLevelPage from './pages/quizzes/listquizzes/animals/mammal/easylevel/main.tsx'
import MammalPage from './pages/quizzes/listquizzes/animals/mammal/main.tsx'
import HistoryPage from './pages/quizzes/listquizzes/history/main.tsx'
import WorldHistoryPage from './pages/quizzes/listquizzes/history/worldhistory/main.tsx'
import AncientHistoryMediumLevelPage from './pages/quizzes/listquizzes/history/ancienthistory/mediumlevel/main.tsx'
import AncientHistoryEasyLevelPage from './pages/quizzes/listquizzes/history/ancienthistory/easylevel/main.tsx'
import AncientHistoryPage from './pages/quizzes/listquizzes/history/ancienthistory/main.tsx'
import WorldHistoryMediumLevelPage from './pages/quizzes/listquizzes/history/worldhistory/mediumlevel/main.tsx'
import BadmintonEasyLevelPage from './pages/quizzes/listquizzes/sports/badminton/easylevel/main.tsx'
import Cartoon from './pages/quizzes/listquizzes/cartoon/main.tsx'
import Animal from './pages/quizzes/listquizzes/animals/main.tsx'
import TomandjerryMediumLevelPage from './pages/quizzes/listquizzes/cartoon/tomandjerry/mediumlevel/main.tsx'
import GumballMediumLevelPage from './pages/quizzes/listquizzes/cartoon/gumball/mediumlevel/main.tsx'
import GumballEasyLevelPage from './pages/quizzes/listquizzes/cartoon/gumball/easylevel/main.tsx'
import SpongebobHardLevelPage from './pages/quizzes/listquizzes/cartoon/spongebobsquarepants/hardlevel/main.tsx'
import SpongebobMediumLevelPage from './pages/quizzes/listquizzes/cartoon/spongebobsquarepants/mediumlevel/main.tsx'
import SpongebobEasyLevelPage from './pages/quizzes/listquizzes/cartoon/spongebobsquarepants/easylevel/main.tsx'
import TomandjerryPage from './pages/quizzes/listquizzes/cartoon/tomandjerry/main.tsx'

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
     <Route path='/quizzes/sports/football/1' element={<FootballEasyLevelPage/>}/>
     <Route path='/quizzes/sports/football/2' element={<FootballMediumLevelPage/>}/>
     <Route path='/quizzes/sports/football/3' element={<FootballHardLevelPage/>}/>
     <Route path='/quizzes/sports/badminton' element={<Badminton/>}/>
     <Route path='/quizzes/sports/badminton/1' element={<BadmintonEasyLevelPage/>}/>
     <Route path='/quizzes/sports/badminton/2' element={<BadmintonMediumLevelPage/>}/>
     <Route path='/quizzes/sports/basketball' element={<BasketBall/>}/>
     <Route path='/quizzes/sports/basketball/1' element={<BasketBallEasyLevelPage/>}/>
     <Route path='/quizzes/sports/basketball/2' element={<BasketBallMediumLevelPage/>}/>
     <Route path='/quizzes/sports/basketball/3' element={<BasketBallHardLevelPage/>}/>
     <Route path='/quizzes/sports/volleyball' element={<VolleyBall/>}/>
     <Route path='/quizzes/sports/volleyball/1' element={<VolleyBallEasyLevelPage/>}/>
     <Route path='/quizzes/sports/volleyball/2' element={<VolleyBallMediumLevelPage/>}/>
       <Route path='/quizzes/cartoon/' element={<Cartoon/>}/>
      <Route path='/quizzes/cartoon/spongebob' element={<SpongebobPage/>}/>
      <Route path='/quizzes/cartoon/spongebob/1' element={<SpongebobEasyLevelPage/>}/>
      <Route path='/quizzes/cartoon/spongebob/2' element={<SpongebobMediumLevelPage/>}/>
      <Route path='/quizzes/cartoon/spongebob/3' element={<SpongebobHardLevelPage/>}/>
      <Route path='/quizzes/cartoon/tomandjerry' element={<TomandjerryPage/>}/>
      <Route path='/quizzes/cartoon/tomandjerry/1' element={<TomandjerryMediumLevelPage/>}/>
      <Route path='/quizzes/cartoon/tomandjerry/2' element={<TomandjerryMediumLevelPage/>}/>
       <Route path='/quizzes/cartoon/gumball' element={<GumballPage/>}/>
       <Route path='/quizzes/cartoon/gumball/1' element={<GumballEasyLevelPage/>}/>
       <Route path='/quizzes/cartoon/gumball/2' element={<GumballMediumLevelPage/>}/>
       <Route path='/quizzes/sciences' element={<Sciences/>}/>
       <Route path='/quizzes/sciences/math' element={<MathPage/>}/>
       <Route path='/quizzes/sciences/math/1' element={<MathEasyLevelPage/>}/>
       <Route path='/quizzes/sciences/math/2' element={<MathMediumLevelPage/>}/>
      <Route path='/quizzes/sciences/math/3' element={<MathHardLevelPage/>}/>
       <Route path='/quizzes/sciences/physics' element={<PhysicsPage/>}/>
      <Route path='/quizzes/sciences/physics/1' element={<PhysicsEasyLevelPage/>}/>
       <Route path='/quizzes/sciences/physics/2' element={<PhysicsMediumLevelPage/>}/>
      <Route path='/quizzes/sciences/chemistry' element={<ChemistryPage/>}/>
       <Route path='/quizzes/sciences/chemistry/1' element={<ChemistryEasyLevelPage/>}/>
       <Route path='/quizzes/sciences/chemistry/2' element={<ChemistryMediumLevelPage/>}/>
                  <Route path='/quizzes/animals/' element={<Animal/>}/>
                  <Route path='/quizzes/animals/reptiles' element={<ReptilesPage/>}/>
                  <Route path='/quizzes/animals/reptiles/1' element={<ReptilesEasyLevelPage/>}/>
                  <Route path='/quizzes/animals/reptiles/2' element={<ReptilesMediumLevelPage/>}/>
                  <Route path='/quizzes/animals/mammals' element={<MammalPage/>}/>
                  <Route path='/quizzes/animals/mammals/1' element={<MammalEasyLevelPage/>}/>
                  <Route path='/quizzes/animals/mammals/2' element={<MammalMediumLevelPage/>}/>

                  <Route path='/quizzes/history/' element={<HistoryPage/>}/>
                  <Route path='/quizzes/history/worldhistory' element={<WorldHistoryPage/>}/>
                  <Route path='/quizzes/history/worldhistory/1' element={<AncientHistoryEasyLevelPage/>}/>
                  <Route path='/quizzes/history/worldhistory/2' element={<WorldHistoryMediumLevelPage/>}/>
                  <Route path='/quizzes/history/ancienthistory' element={<AncientHistoryPage/>}/>
                  <Route path='/quizzes/history/ancienthistory/1' element={<AncientHistoryEasyLevelPage/>}/>
                  <Route path='/quizzes/history/ancienthistory/2' element={<AncientHistoryMediumLevelPage/>}/>







    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
