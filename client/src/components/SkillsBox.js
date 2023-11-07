import WhiteTypography from "./WhiteTypography"
import { Grid, Box } from "@mui/material"
import SkillCard from "./SkillCard"
import skillData from "../data/skillData"

export default function SkillsBox() {
    return (
        <Box style={{ marginTop: "3rem", marginBottom: "6rem" }}>
            <WhiteTypography gutterBottom variant="h4" component="div" style={{ marginBottom: "4rem" }}>
                My Skills
            </WhiteTypography>
            <Grid container rowSpacing={5} style={{ justifyContent: 'space-around' }}>
                {skillData.map((item, index) => {
                    return (
                        <Grid item xs={2} key={index} style={{ marginTop: "2rem" }}>
                            <SkillCard name={item.name} level={item.level} image={item.image} index={index} color={item.color} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}