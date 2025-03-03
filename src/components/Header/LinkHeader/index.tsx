import { Link } from "react-router";

interface LinkHeaderProps {
    to: string;
    texto: string;
}

const LinkHeader: React.FC<LinkHeaderProps> = ({ to, texto }) => {
    return (  
        <Link to={to} className="hover:scale-105 transition-all">{texto}</Link>
    );
}
 
export default LinkHeader;