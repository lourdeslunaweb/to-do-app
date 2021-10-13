const Cards = () => {
    return (
        <div className="card border-info mb-3 mt-5 mx-3 col-lg-3 col-md-4 col-10">
            <div className="card-body">
                <h4 className="card-title">Danger card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="form-group">
                    <label htmlFor="exampleSelect1" className="form-label mt-4">Estado</label>
                    <select className="form-select" id="exampleSelect1">
                        <option>Pendiente</option>
                        <option>En proceso</option>
                        <option>Finalizada</option>
                        <option>Cancelada</option>
                        <option>Postergada</option>
                    </select>
                    <div className="mt-5 d-flex justify-content-evenly">
                    <button type="button" className="btn btn-outline-info">Actualizar</button>
                    <button type="button" className="btn btn-outline-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Cards }