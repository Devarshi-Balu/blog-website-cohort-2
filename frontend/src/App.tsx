import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Blog from './pages/blog'
import SideBox from './components/SideBox'
import Test from './pages/test'

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
