import Postagem from "./Postagem"

interface User {
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    token: string
    postagem?: Postagem[]
}

export default User