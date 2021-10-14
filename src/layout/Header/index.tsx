import { CardUserInit } from "../../components"
// import { CardUserLogged } from "../../components"

const Header = () => {
    return (
        <header className="mt-5 container">
            <div className="row d-flex justify-content-md-evenly justify-content-center">
                <div className="col-12 col-md-8">
                    <h1 className="text-center">To-Do-App</h1>
                    <p className="text-center">Organizador de tareas</p>
                </div>
                <CardUserInit/>
                {/* <CardUserLogged/> */}
            </div>
        </header>
    )
}

export { Header }