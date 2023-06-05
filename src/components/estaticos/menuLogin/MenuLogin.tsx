import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { UserState } from '../../../store/token/Reducer'
import User from '../../../models/User'
import { buscaId } from '../../../services/Service'
import { addToken } from '../../../store/token/Actions'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Divider } from '@mui/material'

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    let navigate = useNavigate()

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const userId = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    const [user, setUser] = useState<User>({
        id: +userId,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    useEffect(() => {
        buscaId(`/usuarios/${userId}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }, [userId])

    function goLogout() {
        dispatch(addToken(''))
        alert("Usuário deslogado")
        navigate('/login')
    }

    return (
        <div>
            <Box display='flex' justifyContent='space-evenly' alignItems='center' sx={{ width: '15vw' }}>
                <Button
                    variant='contained'
                    color='primary'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: 'white', width: '100%', display: 'flex', justifyContent: 'space-evenly' }}
                >
                    {userId !== '' ? user.nome : 'Login'}
                    <AccountCircleIcon sx={{ fontSize: '250%' }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem sx={{ width: '15vw', display: 'flex', justifyContent: 'center' }}>Perfil</MenuItem>
                    <Divider />
                    <MenuItem onClick={goLogout} sx={{ width: '15vw', display: 'flex', justifyContent: 'center' }}>Sair</MenuItem>
                </Menu>
            </Box>
        </div>
    )
}