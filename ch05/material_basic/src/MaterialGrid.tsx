import { Button, Grid } from "@mui/material";

export default function MaterialGrid() {
    return (
        <Grid container spacing={2}>
            <Grid size={{xs: 12, sm: 9, md: 6}}>
                <Button variant="contained" fullWidth>1</Button>
            </Grid>
            <Grid size={{xs: 12, sm: 3, md: 2}}>
                <Button variant="contained" fullWidth>2</Button>
            </Grid>
            <Grid size={{xs: 12, sm: 4, md: 3}}>
                <Button variant="contained" fullWidth>3</Button>
            </Grid>
            <Grid size={{xs: 12}}>
                <Button variant="contained" fullWidth>4</Button>
            </Grid>
        </Grid>
    )
}