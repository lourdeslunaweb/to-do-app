import React from 'react';

const SignUp = () => {
    return (
        <div className="mt-5">
            <h3 className="text-center">Creá tu cuenta</h3>
            < form className="container my-5 col-md-6 col-12">
                <fieldset>
                <div className="form-group">
                        <label htmlFor="inputName" className="form-label mt-4">Ingresá tu nombre</label>
                        <input type="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Nombre aquí" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Ingresá tu email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email aquí" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña aqui" />
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary mt-5">Crear cuenta</button>
            </form >
        </div>
    )

}

export { SignUp }