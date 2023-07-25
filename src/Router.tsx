import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Post } from './pages/post'
import { DefaultLayout } from './layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
