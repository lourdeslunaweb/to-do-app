import { FC, FormEvent, useState } from "react";
import { useHistory } from 'react-router';
import { Layout } from "../../layout";
import { setTask } from "./api";

const CreateTask: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    let history = useHistory();
    let status: string = "pending"
    const handleNewTask = (e: FormEvent) => {
        e.preventDefault();
        setTask({ title, description, status});
        history.push("/dashboard")
    }
    return (
        <Layout>
            <div className="mt-5">
                <h3 className="text-center">Crear nueva tarea</h3>
                < form className="container my-5 col-md-6 col-12" onSubmit={handleNewTask}>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="inputTask" className="form-label mt-4">Título de la tarea</label>
                            <input type="name" className="form-control" id="inputTask" aria-describedby="taskHelp" placeholder="Título aquí" onChange={(e) => {
                                setTitle(e.target.value);
                            }}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea" className="form-label mt-4">Descripción de la tarea</label>
                            <textarea className="form-control" id="exampleTextarea" placeholder="Descripción aquí" onChange={(e) => {
                                setDescription(e.target.value);
                            }}/>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary mt-5">Crear tarea</button>
                </form >
            </div>
        </Layout>
    )
}

export { CreateTask }

