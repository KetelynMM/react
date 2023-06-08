import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { UserState } from '../../../store/token/Reducer'
import MenuLogin from '../menuLogin/MenuLogin'
import './Navbar.css'

function Navbar() {
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    var navbarComponent

    if (token !== '') {
        navbarComponent = (
            <AppBar position="static" className='appbar'>
                <Toolbar variant="dense" className='toolbar'>
                    <Box className='cursor'>
                        <Typography variant="h5" className='navbarcor'>
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent='space-evenly' sx={{ width: '30vw' }}>
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navbarcor'>
                                    Início
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navbarcor'>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navbarcor'>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='navbarcor'>
                                    Criar Tema
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <MenuLogin />
                </Toolbar>
            </AppBar>
        )
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar