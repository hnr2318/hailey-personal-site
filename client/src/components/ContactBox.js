import { Box, Paper, Stack } from "@mui/material"
import ContactForm from "./ContactForm"
import ContactDetails from "./ContactDetails"
import '../App.css'
import WhiteTypography from "./WhiteTypography"

export default function ContactBox() {
    return (
        <Box id="contact-box">
            <WhiteTypography gutterBottom variant="h4" component="div" style={{ marginBottom: "3rem" }}>
                Contact
            </WhiteTypography>
            <Stack direction="row" spacing={2}>
                <ContactForm />
                <ContactDetails />
                <Paper />
            </Stack>
        </Box>
    )
}