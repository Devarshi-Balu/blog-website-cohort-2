import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Blogs from './pages/blogs'
import BlogReading from "./pages/BlogReadingPage"
import Test from './pages/test'
import { RecoilRoot } from 'recoil'
import Home from "./pages/Home.tsx";
import BlogWritingPage from './pages/blogwritingpage.tsx'



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
              <Route path="/blog/write/:id" element={< BlogWritingPage />} />
            </Routes>
          </RecoilRoot>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
