const CardUserLogged = () => {
    return (
        <div className="card border-primary mb-3 col-7 col-md-4">
            <h4 className="card-title text-center mt-1">Nombre: Lourdes Luna</h4>
            <div className="card-header text-center">
                <button type="button" className="btn btn-outline-primary">Cambiar datos</button>
                <button type="button" className="btn btn-outline-danger mt-3 mt-xl-0 ms-xl-3">Cerrar sesión</button>
            </div>
        </div>
    )
}

export { CardUserLogged }