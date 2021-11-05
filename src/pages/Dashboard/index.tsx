import { Link } from "react-router-dom";
import { PendingTaskCard, InProgressTaskCard, FinishedTaskCard, LoggedUserCard } from "../../components";
import {NoPendingTask, NoInProcessTask,  NoFinishedTask} from "../../components";
import { Layout } from "../../layout";


const Dashboard = () => {
    return (
        <Layout hideHeader>
            <div className="container my-5">
                <div className="row mt-5 mx-1 d-flex flex-column align-items-center">
                    <LoggedUserCard/>
                    <h2 className="text-center mt-5"> Mis tareas </h2>
                    <button type="button" className="btn btn-outline-primary mt-3"> <Link to="/create-task">Crear nueva tarea</Link></button>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <h3 className="text-center text-info">Tareas pendientes </h3>
                    <NoPendingTask/>
                    <PendingTaskCard />
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <h3 className="text-center text-warning">Tareas en proceso</h3>
                    <NoInProcessTask/>
                    <InProgressTaskCard/>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <h3 className="text-center text-success">Tareas finalizadas</h3>
                    < NoFinishedTask/>
                    <FinishedTaskCard/>
                </div>
            </div>
        </Layout>
    )
}

export { Dashboard }