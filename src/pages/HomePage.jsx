import Card from "../components/Card"
import Card2 from "../components/Card2"

const HomePage = () => {
    return (
        <div>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
                    >
                        <svg className="bi me-2" width="40" height="32">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                        <span className="fs-4 text-[#FF008B]">MakeupPage</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                </div>
            </header>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5 mx-5">
                <Card text="Pinta Labios" color={true} image="pintaLabios" />
                <Card text="Correctores" color={false} image="correctores" />
                <Card text="Rubores" color={true} image="rubores" />
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-2 mx-5">
                <Card text="Sombras" color={true} image="sombra" />
                <Card text="Delineadores" color={false} image="delineadores" />
                <Card text="Mascarillas" color={true} image="mascarillas" />
            </div>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 mx-4">
                <Card2 text="Pestañas Postizas" image="pestanas"/>
                <Card2 text="Pinta Uñas" image="pintaunas" />
                <Card2 text="Brochas" image="brochas"/>
            </div>
        </div>
    )
}
export default HomePage
