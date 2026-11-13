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
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
