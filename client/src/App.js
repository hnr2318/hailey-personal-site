import './App.css';
import ResponsiveAppBar from './components/AppBar';
import IntroBox from './components/IntroBox';
import ProjectSlider from './components/ProjectSlider';
import Stack from '@mui/material/Stack';
import ContactBox from './components/ContactBox';
import ExperienceBox from './components/ExperienceBox';
import SkillsBox from './components/SkillsBox';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="App">
        <ResponsiveAppBar />
        <Stack spacing={2} className='mx-auto container'>
          <Stack direction="row" spacing={2} style={{ marginBottom: "5rem" }}>
            <IntroBox />
          </Stack>
          <SkillsBox />
          <ExperienceBox />
          <ProjectSlider />
          <ContactBox />
        </Stack>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          closeButton={false}
          theme="colored"
          icon={false}
        />
      </div>
    </>
  );
}

export default App;
