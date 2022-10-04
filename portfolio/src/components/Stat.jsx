import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Stat=()=>{
    return(
        <div>
       

 
    <Box md={{ display: 'flex' }}>
    <CircularProgress variant="determinate" value={75}  />
    </Box>



        </div>

    )
}
export default Stat