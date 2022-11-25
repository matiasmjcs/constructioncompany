import './inicio.css'

const Inicio = () => {
    return(
        <div className="main">
            <div className="main_img"><div className='main_img--div'><h2>Constructora <br />'Nombre de la constructora'</h2></div></div>
            <div className="main_img2">
                <div className='main_img2--div'>Creamos espacios, pero en realidad, nos dedicamos a construir sueños. <br/> Nosotros te damos la forma, para que tú la llenes de vida.</div>
                <div className='main_img2--img'></div>
            </div>
            <hr/>
            <div className='main_ubicacion'>
                <h2>Realizamos trabajos en toda la V Region</h2>
                <button  className='main_button'>Ver Proyectos</button>
            </div>
            <hr/>
            <div className='main_contacto'>
                <h2>Nuestras redes de Contacto</h2>
                <b>+56900000000</b>
                <b>correoelectronico@gmail.com</b>
            </div>
        </div>
    )
}

export default Inicio