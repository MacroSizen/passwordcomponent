import React from 'react';
import { Typography, Grid, Avatar } from '@mui/material';

const MissingValidationText = ({title, isValid}) => {
    return (
        <div>
            <Grid style={{padding: "10px"}} container xs={12}>
                <Grid container  xs={3}>
                    <Avatar sx={{ bgcolor: isValid ? "green" : "red"}}>{isValid ? "O" : "X"}</Avatar>
                </Grid>
                <Grid container justifyContent="flex-start" xs={9}>
                    <Typography textAlign={"left"}>{title}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default MissingValidationText;