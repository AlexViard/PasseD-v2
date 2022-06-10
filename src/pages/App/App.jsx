import { Routes, Route } from 'react-router-dom'
import { Home } from 'src/pages'

export const App = () => (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
)
