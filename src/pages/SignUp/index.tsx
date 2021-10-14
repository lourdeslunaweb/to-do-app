import { FC, FormEvent, useState } from 'react';
import { signup } from "./api";

const SignUp: FC = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        signup({ email, password, name });
    }
    return (
        <div className="mt-5">
            <h3 className="text-center">Creá tu cuenta</h3>
            < form className="container my-5 col-md-6 col-12" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="inputName" className="form-label mt-4">Ingresá tu nombre</label>
                        <input required type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Nombre aquí" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Ingresá tu email</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email aquí" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña aqui" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary mt-5">Crear cuenta</button>
            </form >
        </div>
    )

}

export { SignUp }