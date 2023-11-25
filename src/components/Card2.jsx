import "../styles/JS_Card2.css"

// eslint-disable-next-line react/prop-types
const Card2 = ({ text, image }) => {
    return (
        <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" id={image}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-black font-extrabold text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{text}</h3>
                    <ul className="d-flex list-unstyled mt-auto">
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card2