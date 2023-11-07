import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card, Typography } from '@mui/material';
import '../App.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { toast } from 'react-toastify'


export default function ContactForm() {
    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        message: ""
    })

    function handleFormSubmit(e) {
        e.preventDefault()
        emailjs.sendForm('service_11k5hly', 'template_eb5u3vq', e.target, 'JR7xmvkLYetkaS-cH')
            .then((result) => {
                toast.success('Your message has been delivered!');
            }, (error) => {
                toast.error('Your message failed to deliver');
            })
        setForm({
            from_name: "",
            from_email: "",
            message: ""
        })
    }

    function handleFormChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Card variant="outlined" id="contact-form" >
            <Typography variant="h5" style={{ marginBottom: "2rem" }}>Message Me!</Typography>
            <form onSubmit={handleFormSubmit}>
                <Stack spacing={2}>
                    <TextField
                        id="outlined-helperText"
                        label="Full Name"
                        type='text'
                        name='from_name'
                        value={form.from_name}
                        onChange={handleFormChange}
                    />
                    <TextField
                        id="outlined-helperText"
                        label="Your Email"
                        type='email'
                        name='from_email'
                        value={form.from_email}
                        onChange={handleFormChange}
                    />
                    <TextField
                        id="outlined-helperText"
                        label="Message"
                        type='text'
                        name='message'
                        value={form.message}
                        onChange={handleFormChange}
                        multiline
                    />
                    <Button style={{ background: 'rgb(34, 0, 128)', padding: '1rem' }} variant="contained" type='submit' value='send'>Submit</Button>
                </ Stack>
            </form>
        </Card>
    )
}