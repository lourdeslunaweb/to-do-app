import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout } from '../../layout';
import { login } from './api';

const defaultValues = {
    email: "",
    password: "",
};

const Login = () => {
    const [inputs, setInputs] = useState(defaultValues);
    let history = useHistory();
    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        try {
            const response = await login(inputs);
            localStorage.setItem("user", JSON.stringify(response));
            history.push("/dashboard");
        } catch (e) {
            
        }
    };
    return (
        <Layout>
            <div className="mt-5">
                < form className="container my-5 col-md-6 col-12" onSubmit={handleSubmit}>
                    <fieldset>
                        <h3 className="text-center">Iniciar sesión</h3>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail" className="form-label mt-4">Ingresá tu email</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email aquí" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword" className="form-label mt-4">Contraseña</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña aqui" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary mt-5">Ingresar</button>
                    <p className="mt-5">¿No tienes cuenta? Crea una cuenta ingresando <Link to="sign-up">aquí</Link></p>
                </form >
            </div>
        </Layout>
    )

}

export { Login }