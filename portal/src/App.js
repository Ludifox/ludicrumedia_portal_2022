import './css/main.css';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';
import Project from './components/Project';

function App() {
  

  return (
    <Routes>
      <Route index element={<Projects />} />
      <Route path="prosjekter">
        <Route index element={<Projects />} />
        <Route path=":slug" element={<Project />} />
      </Route>
    </Routes>
  );
}

export default App;
