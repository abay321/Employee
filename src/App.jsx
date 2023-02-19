import Layout from "./components/Dashboard";

import './App.css'
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <Routes>      
        <Route path="*" element={<Layout />} />
    </Routes>
    </>

  )
  
}
export default App