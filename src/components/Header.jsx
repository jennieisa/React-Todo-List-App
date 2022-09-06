import Navigation from './Navigation'

const Header = ({heading}) => {
    return (
        <header className='pageHeader'>
            <Navigation />
            <h1>{heading}</h1>
        </header>
    )
}

export default Header; 