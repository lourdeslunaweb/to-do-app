import { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Layout } from '../../layout';
import { signup } from "./api";

const defaultValues = {
    name: "",
    email: "",
    password: "",
};

const SignUp: FC = () => {
    const [inputs, setInputs] = useState(defaultValues);
    let history = useHistory();
    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        signup(inputs);
        history.push("/dashboard")
    }
    return (
        <Layout>
            <div className="mt-5">
                <h3 className="text-center">Creá tu cuenta</h3>
                < form className="container my-5 col-md-6 col-12" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="inputName" className="form-label mt-4">Ingresá tu nombre</label>
                            <input required type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Nombre aquí" value={inputs.name}
                                onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Ingresá tu email</label>
                            <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email aquí" value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                            <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña aqui" value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}/>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary mt-5">Crear cuenta</button>
                </form >
            </div>
        </Layout>
    )

}

export { SignUp }