import { Link } from 'react-router-dom';
import StatusIndicator from '../StatusIndicator';

function Home(){
    return(
        <>
            <h1>Home</h1>
            <StatusIndicator></StatusIndicator>
            <Link to="/about">About</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/upload">Upload</Link>
            <br />
            <Link to="/gallery">Gallery</Link>
            <br />
        </>
    )
}

export default Home