import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '15px',
                    justifyContent: 'center',
                    backgroundColor: '#222',
                    color: 'white',
                    fontFamily: 'Arial'
                    }}>
                <link to='/home' style={{
                    color:'white', 
                    textDecoration:'none',

                }}>Home</link>

                <link to='/about' style={{
                    color:'white', 
                    textDecoration:'none',
                    
                }}>About</link>

                <link to='/services' style={{
                    color:'white', 
                    textDecoration:'none',
                    
                }}>Services</link>

                <link to='/contact' style={{
                    color:'white', 
                    textDecoration:'none',
                    
                }}>Contact</link>
            </nav>
        </>
    )
}

export default Navbar;