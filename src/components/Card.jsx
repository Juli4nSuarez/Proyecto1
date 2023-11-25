import "../styles/JS_Card.css"

// eslint-disable-next-line react/prop-types
const Card = ({ color, text, image }) => {
    return (
        <div className={`col pt-3 px-3 pt-md-5 px-md-5 rounded-md text-center overflow-hidden ${color ? ' bg-[#E0A9FD] ' : 'bg-[#FDA9D7]'}`}>
            <div className="my-3 py-3 ">
                <h2 className="display-5 font-semibold">{text}</h2>
            </div>
            <div className={`shadow-sm mx-auto  ${color ? 'bg-body-tertiary' : 'bg-dark'}`} id={image}></div>
        </div>
    )
}


export default Card

