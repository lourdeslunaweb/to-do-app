import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../layout';

const Login = () => {
    return (
        <Layout hideCardUserInit>
            <div className="mt-5">
                < form className="container my-5 col-md-6 col-12">
                    <fieldset>
                        <h3 className="text-center">Iniciar sesión</h3>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail" className="form-label mt-4">Ingresá tu email</label>
                            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email aquí" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword" className="form-label mt-4">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword" placeholder="Contraseña aqui" />
                        </div>
                    </fieldset>
                    <Link to="/dashboard"><button type="submit" className="btn btn-primary mt-5">Ingresar</button></Link>
                    <p className="mt-5">¿No tienes cuenta? Crea una cuenta ingresando <Link to="sign-up">aquí</Link></p>
                </form >
            </div>
        </Layout>
    )

}

export { Login }