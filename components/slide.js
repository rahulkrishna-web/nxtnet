import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';

export default function Slide(props) {
    const { title } = props
    return(
        <Box sx={{p:2}}>
        <Paper elevation={1}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: "250px" }}>
                <Typography variant='body1'>{title}</Typography>
            </Box>
        </Paper>
        </Box>
    )
}