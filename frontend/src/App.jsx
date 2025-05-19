
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetails from './pages/NotesDetail';
function App() {
  return (
    <div data-theme="halloween" className="relative h-full w-full">
    <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [(background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%))]'/>
      <Routes>
        <Route
          path='/'
          element={<HomePage/>}
        />
      <Route 
      path='/create-page' 
      element={<CreatePage/>}
      />
      <Route
        path='/note/:id'
        element={<NoteDetails/>}
      />
      </Routes>
    </div>
  )
}

export default App
