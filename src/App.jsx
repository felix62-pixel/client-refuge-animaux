import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const PetList = lazy(() => import ('./pages/PetList'))
const PetDetail = lazy(() => import ('./pages/PetDetail'))
const EditPet = lazy(() => import ('./pages/EditPet'))
const AddPet = lazy(() => import ('./pages/AddPet'))

function App() {

  const [petToEdit, setPetToEdit] = useState(null)

  return (
    <div className="App" style={{backgroundColor: 'rgba(153, 90, 173, 0.5)'}}>
      <Router>
        <h1>Pet shelter</h1>

        <Link to='/add'>
          <button className='buttonapp'>Add new pet</button>
        </Link>
          <Link to='/:petId/edit'>
            <button className='buttonedit'>Edit pet</button>
        </Link>

        <Routes>
          <Route path='/' element={<Suspense fallback={<></>}><PetList /></Suspense>}/>

          <Route path='/:petId' element={<Suspense fallback={<></>}><PetDetail setPetToEdit={setPetToEdit} /></Suspense>}/>

          <Route path='/:petId/edit' element={<Suspense fallback={<></>}><EditPet petToEdit={petToEdit} /></Suspense>}/>

          <Route path='/add' element={<Suspense fallback={<></>}><AddPet /></Suspense>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App