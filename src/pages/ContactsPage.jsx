import { Link } from "react-router-dom"
import "../styles/JS_ContactsPage.css"


const ContactsPage = () => {
  return (
    <div className="mx-10">
      <h1 className="flex flex-col place-items-center p-4 text-2xl font-bold">
        Contactanos en nuestras redes</h1>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <Link className="col" to="#">
          <div id="bag1" className="card card-cover h-100 text-bg-dark overflow-hidden rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ">INSTAGRAM</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.lJ2X3pqKFYTY77zbDd8XYwHaHa&pid=Api&P=0&h=180" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small>link del instagram</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>

                </li>
              </ul>
            </div>
          </div>
        </Link>

        <Link to="#" className="col">
          <div id="bag2" className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">FACEBOOK</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.aYVbqEFb2M-SWsBh_LafIQHaHa&pid=Api&P=0&h=180" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small>Link del facebook</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <Link className="col" to="#">
          <div id="bag3" className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">TikTok</h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.j_YzoIaS4U2t4_eHnXSneAHaHa&pid=Api&P=0&h=180" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                  <small></small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3"></use></svg>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default ContactsPage