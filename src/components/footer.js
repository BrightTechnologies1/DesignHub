import React from 'react';
import '../App.css';
import '../css/footer.css';
import { Facebook, Twitter, EnvelopeFill, Instagram} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className='container col-12'>
            <div className='footer row'>
                <div className='social'>
                    <a href='https://github.com/BrightTechnologies1' target='_blank'><span><Facebook /></span></a>
                    <a href='https://twitter.com/OlumideSilas' target='_blank'><span><Twitter /></span></a>
                    <a href='' target='_blank'><span><Instagram /></span></a>
                    <a href='' target='_blank'><span><EnvelopeFill /></span></a>
                </div>
                <span>copyright 2022.</span>
            </div>
        </div>
    );
}

export default Footer;