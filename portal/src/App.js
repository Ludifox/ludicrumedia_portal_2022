import './css/main.css';
import Projects from './components/Projects';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/nb';
import Layout from './components/Layout';
import { CssBaseline } from '@mui/material';

function App() {
  

  return (
    <><CssBaseline enableColorScheme />
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="nb">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="prosjekter">
            <Route index element={<Projects />} />
            <Route path=":slug" element={<Project />}>
              <Route index element={<Project />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </LocalizationProvider></>
  );
}

export default App;
