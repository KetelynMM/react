import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    return (
        <Grid container direction='row' >
            <Grid alignItems='center' item xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box margin={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma Conta?</Typography>
                    </Box>
                    <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos2'>Cadastre-se</Typography>
                    </Link>
                </Box>
                <Grid className='imagem'>
                    
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;