const CreateTask = () => {
    return (
        <div className="mt-5">
            <h3 className="text-center">Crear nueva tarea</h3>
            < form className="container my-5 col-md-6 col-12">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="inputName" className="form-label mt-4">Título de la tarea</label>
                        <input type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Título aquí" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleTextarea" className="form-label mt-4">Descripción de la tarea</label>
                        <textarea className="form-control" id="exampleTextarea" placeholder="Descripción aquí" ></textarea>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary mt-5">Crear tarea</button>
            </form >
        </div>
    )
}

export { CreateTask }

