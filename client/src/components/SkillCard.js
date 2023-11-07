import Card from '@mui/material/Card';
import "../App.css"

import { CardHeader, Avatar } from '@mui/material';

const imageKeys = ['js', 'react', 'python', 'html', 'sql', 'css', 'java', 'php', 'node', 'express', 'c', 'mongo']

export default function SkillCard(props) {
    const index = props.index
    return (
        <Card sx={{ maxWidth: 200, ml: "2rem" , boxShadow: `10px 5px 5px ${props.color}`}} className='mx-auto'>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={props.image[imageKeys[index]]} />
                }
                title={props.name}
                subheader={props.level}
            />
        </Card>
    )
}