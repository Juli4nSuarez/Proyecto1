import '../styles/JS_HomePage.css'

const ProyectPage = () => {
    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-secondary" id="background">
                <div className="col-md-6 p-lg-5 mx-auto my-5 bg-white 2rounded-md">
                    <h1 className="display-3 fw-bold">Makeapp</h1>
                    <h3 className="fw-normal text-muted mb-3">Nuestra app con nuestros catalogos</h3>
                    <div className="d-flex gap-3 justify-content-center lead fw-normal">
                        <a className="icon-link" href="#">
                            ¡Descargar!
                            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                        </a>
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

        </div>
    )
}
export default ProyectPage