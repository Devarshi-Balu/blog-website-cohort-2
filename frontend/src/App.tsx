import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Blogs from './pages/blogs'
import BlogWriting from './components/BlogWriting'
import SideBox from './components/SideBox'
import BlogReading from "./pages/BlogReadingPage"
import Test from './pages/test'
import { RecoilRoot } from 'recoil'
import Home from "./pages/Home.tsx";



function App() {


  return (
    <div>
      <div>
        <BrowserRouter>
          <RecoilRoot >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to='/' />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blog/:id" element={<BlogReading />} />
              <Route path='/test' element={<Test />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/write/:id" element={< BlogReading />} />
            </Routes>
          </RecoilRoot>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
