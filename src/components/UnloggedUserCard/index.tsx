import { Link } from "react-router-dom"

const UnloggedUserCard = () => {
    return (
        <div className="card border-primary mb-3 col-7 col-md-4">
            <Link to="/login"><div className="card-header text-center">Iniciar sesión</div></Link>
            <Link to="/sign-up"><div className="card-header text-center">Crear cuenta</div></Link>
        </div>
    )
}

export { UnloggedUserCard }