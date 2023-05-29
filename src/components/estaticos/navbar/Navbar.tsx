import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from '@material-ui/icons';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box  className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                <a href="./home">home</a>
                                </Typography>
                            </Box>
                        
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            <a href="./postagens">postagens</a>
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            <a href="./temas">temas</a>
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                   <a href="./login">login</a>
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;