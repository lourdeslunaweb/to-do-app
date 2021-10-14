import React from 'react';

const Login = () => {
    return (
        <div className="mt-5">
            < form className="container my-5 col-md-6 col-12">
                <fieldset>
                    <legend>Iniciar sesión</legend>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail" className="form-label mt-4">Ingresá tu email</label>
                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email aquí" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword" className="form-label mt-4">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword" placeholder="Contraseña aqui" />
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary mt-5">Ingresar</button>
                <p className="mt-5">¿No tienes cuenta? Crea una cuenta ingresando aquí</p>
            </form >
        </div>
    )

}

export { Login }