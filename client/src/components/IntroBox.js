import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import computer from '../images/computer.png'
import WhiteTypography from './WhiteTypography'
import Resume from '../data/Resume_HR.pdf'

export default function IntroBox() {

    return (
        <>
            <Box sx={{ mt: 25, textAlign: 'left', float: 'left', width: "33.33%"}} id="introBlock">
                <WhiteTypography variant="h3" sx={{ mb: 2.5 }}>
                    Hello world, it's Hailey,
                </WhiteTypography>
                <WhiteTypography variant="h5">
                    A fullstack software developer
                </WhiteTypography>
                <a href={Resume} download="HaileyResume" target="_blank">
                <Button variant="contained" sx={{ mt: 5, backgroundColor: 'rgb(208,120,151)' }}>
                    <svg style={{marginRight: 10}} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="8 12 12 16 16 12"></polyline>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                    </svg>
                    Download Resume
                </Button>
                </a>
            </Box>
            <Box sx={{ mt: 25, textAlign: 'right', float: 'right', width: "66.66%" }}>
                <img src={computer} alt='computer' />
            </Box>
        </>
    )
}