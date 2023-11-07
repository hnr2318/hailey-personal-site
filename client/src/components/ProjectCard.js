import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../App.css'

export default function ProjectCard(props) {
    return (
        <Card sx={{ maxWidth: 400, background: `linear-gradient(90deg, ${props.color1}, ${props.color2})`, ml: "2rem"}} className='mx-auto'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt="default image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {props.desc}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.tech}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" style={{color: "white",backgroundColor: "rgba(255,255,255,0.2)", padding: "0.75em"}}>
                    Learn more...
                </Button>
            </CardActions>
        </Card>
    );
}