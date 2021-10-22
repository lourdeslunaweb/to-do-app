import { Link } from "react-router-dom"
import { Layout } from "../../layout"

const CreateTask = () => {
    return (
        <Layout>
            <div className="mt-5">
                <h3 className="text-center">Crear nueva tarea</h3>
                < form className="container my-5 col-md-6 col-12">
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="inputTask" className="form-label mt-4">Título de la tarea</label>
                            <input type="name" className="form-control" id="inputTask" aria-describedby="taskHelp" placeholder="Título aquí" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea" className="form-label mt-4">Descripción de la tarea</label>
                            <textarea className="form-control" id="exampleTextarea" placeholder="Descripción aquí" ></textarea>
                        </div>
                    </fieldset>
                    <Link to="/dashboard"><button type="submit" className="btn btn-primary mt-5">Crear tarea</button></Link>
                </form >
            </div>
        </Layout>
    )
}

export { CreateTask }

