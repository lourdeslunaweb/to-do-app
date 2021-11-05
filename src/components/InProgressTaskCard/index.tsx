const InProgressTaskCard = () => {
    return (
        <div className="card border-warning mb-3 mt-5 mx-3 col-lg-3 col-md-4 col-10">
            <div className="card-body">
                <h4 className="card-title">Warning card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="form-group">
                    <select className="form-select" id="exampleSelect1">
                        <option value="" disabled selected>Actualizar estado</option>
                        <option value="finished">Finalizada</option>
                    </select>
                    <div className="mt-5 d-flex justify-content-evenly">
                        <button type="button" className="btn btn-outline-warning">Actualizar</button>
                        <button type="button" className="btn btn-outline-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { InProgressTaskCard }