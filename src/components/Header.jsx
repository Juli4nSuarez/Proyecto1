import { Link } from "react-router-dom"

const Header = () => {

    const pages = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Proyect', href: '/proyect' },
        { id: 3, name: 'Team', href: '/team' },
        { id: 4, name: 'Contacts', href: '/contacts' },
    ]

    return (
        <div>
            <nav className="py-2 bg-body-tertiary border-bottom ">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        {pages.map((pages) => (
                            <li className="nav-item" key={pages.id}>
                                <Link to={pages.href} className="nav-link link-body-emphasis px-2" id={pages.name == 'Home' && 'text'}>{pages.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>


        </div>
    )
}
export default Header