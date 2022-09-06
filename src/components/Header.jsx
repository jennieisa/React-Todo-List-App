import Navigation from './Navigation'

const Header = ({heading}) => {
    return (
        <>
            <Navigation />
            <h1>{heading}</h1>
        </>
    )
}

export default Header; 