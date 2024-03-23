import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "../../assets/cropped-Dino-Logo-1-1.png"

export default function Navbar()
{
    return <nav className="nav">
        
        <div className="title">
            <a href="/">
                <img src={logo} className="cropped-logo" alt="DinoLuzziLogo"></img>
            </a>
            {/* <Link to="/">
                DINO LUZZI ENERGY DRINK
            </Link> */}
        </div>

        <div className="links">
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/news">News</CustomLink>
                <CustomLink to="/locations">Store Locations</CustomLink>
                <CustomLink className="purchase" to="/purchase">Buy Now!</CustomLink>
            </ul>
        </div>
        
        
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )

}