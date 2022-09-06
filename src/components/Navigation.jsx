import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <ul>
            <li><button onClick={() => navigate('/')}>Startsida</button></li>
            <li><button onClick={() => navigate('/about')}>Om sidan</button></li>
            <li><button onClick={() => navigate('/todos')}>Todo lista</button></li>
        </ul>
    )
}

export default Navigation;