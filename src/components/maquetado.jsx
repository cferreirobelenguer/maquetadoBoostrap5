import React from 'react'
import Imagen from '../assets/images/image-header-desktop.jpg'

const Maquetado=()=>{

    return(
        <div className="container-fluid" id="container_maquetado">
            <div className="row row-cols-2 m-0 p-5 justify-content-center ">
                <div className="col-5 p-0" id="columnaLetras">
                    <div className="row" id="container_title">
                        <div className="col">
                            <h1 className="pt-4 title">Get <span className="insignia">insights</span> that help yout business grow</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="container_subtitle">
                            <p className="subtitle">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>
                        </div>
                    </div>
                    <div className="row row-cols-3 justify-content-center pt-4">
                        <div className="col-3" >
                            <h3 className="numbers">10k+</h3>
                        </div>
                        <div className="col-3" >
                            <h3 className="numbers">314</h3>
                        </div>
                        <div className="col-3" >
                            <h3 className="numbers">12M+</h3>
                        </div>
                    </div>
                    <div className="row row-cols-3 justify-content-center ">
                        <div className="col-3" >
                            <p className="description">COMPANIES</p>
                        </div>
                        <div className="col-3" >
                            <p className="description">TEMPLATES</p>
                        </div>
                        <div className="col-3">
                            <p className="description">QUERIES</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 p-0" id="columnaImagen">
                    <img src={Imagen} alt="imagen" className="img-fluid" id="imagenResponsive"></img>
                </div>
            </div>
        </div>
    )
}
export default Maquetado;