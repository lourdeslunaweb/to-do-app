import { FC, useState } from 'react';
import { getTasks } from '../../pages/Dashboard/GetTasks/TaskRequest';
import { Task } from '../../types';

const PendingTaskCard: FC = () => {
    const [tasks, setTasks] = useState<Task[]>()
    const asyncGetTasks = async () => {
        const response = await getTasks()
        console.log(response)
        setTasks(response)
    }
    if (!tasks) {
        asyncGetTasks();
    }
    return (
        <>
            {tasks?.map(task => {
                return (
                    < div className="card border-info mb-3 mt-5 mx-3 col-lg-3 col-md-4 col-10" >
                        <div className="card-body">
                            <h4 className="card-title">{task.title}</h4>
                            <p className="card-text">{task.description}</p>
                            <div className="form-group">
                                <select className="form-select" id="exampleSelect1">
                                    <option value="" disabled selected>Actualizar estado</option>
                                    <option value="process">En proceso</option>
                                    <option value="finished">Finalizada</option>
                                </select>
                                <div className="mt-5 d-flex justify-content-evenly">
                                    <button type="button" className="btn btn-outline-info">Actualizar</button>
                                    <button type="button" className="btn btn-outline-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div >
                );
            })
            }
        </>
    )
}

export { PendingTaskCard }