import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error.styles.js';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import  './Error.styles.scss';


const Error = () => {
    return (
        <div>
            <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/flHudHE.png'/>
                    <ErrorImageText>Sorry Page not found!</ErrorImageText>
            </ErrorImageOverlay>
            <Link to='/'>
                <Button size='lg' className='errorBtn' variant="outline-info">
                    Return Home
                </Button>
            </Link>
        </div>
    )
}

export default Error;
