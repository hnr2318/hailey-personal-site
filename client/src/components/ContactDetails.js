import { Stack } from "@mui/material"
import WhiteTypography from "./WhiteTypography"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import "../App.css"

export default function ContactDetails() {
    return (
        <Stack spacing={3} style={{alignItems: "start"}}>
            <WhiteTypography gutterBottom variant="h5" component="div" style={{ marginBottom: "3rem" }}>
                Contact Details
            </WhiteTypography>
            <Stack direction="row">
                <LocationOnIcon className="contact-detail mx-auto" />
                <WhiteTypography gutterBottom variant="h6" component="div" style={{ marginBottom: "3rem" }}>
                    Chamblee, GA 30341
                </WhiteTypography>
            </Stack>
            <Stack direction="row">
                <EmailIcon className="contact-detail mx-auto" />
                <WhiteTypography gutterBottom variant="h6" component="div" style={{ marginBottom: "3rem" }}>
                    hnr223@gmail.com
                </WhiteTypography>
            </Stack>
            {/* <Stack direction="row">
                <PhoneIcon className="contact-detail mx-auto" />
                <WhiteTypography gutterBottom variant="h6" component="div" style={{ marginBottom: "3rem" }}>
                    678-332-4622
                </WhiteTypography>
            </Stack> */}
        </Stack>
    )
}