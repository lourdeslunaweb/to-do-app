import React, { FC } from 'react';
import { UnloggedUserCard } from '../../components';
import { Layout } from '../../layout';

const Unlogged: FC =() =>{
    return(
        <Layout>
        <div className="container d-flex flex-column align-items-center my-5">
        <UnloggedUserCard/>
        <h2 className="mt-5">¡Te damos la bienvenida!</h2>
        <h3 className="mt-1"> Te invitamos a crear tu usuario para poder dar de alta tareas y organizarlas</h3>
        <h3 className="mt-1"> Tus tareas son personales y sólo vos tendrás acceso a ellas</h3>
        <h3 className="mt-1"> Podes ordenar tus tareas según se encuentren: pendientes, en proceso y realizadas</h3>
        <h3 className="mt-1"> ¡Gracias por usar este organizador de tareas!</h3>
        </div>
        </Layout>
    )
}

export {Unlogged}