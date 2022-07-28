import React from 'react';
import '../App.css';
import '../css/hero.css';
import bg from "../images/background.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"
import { Facebook, Twitter, EnvelopeFill, Instagram} from 'react-bootstrap-icons';

function Hero() {
    return (
        <div className='hero container col-12'>
            <div className='row'>
                <motion.div initial={{ x: -100}} animate={{ x: 0}} transition={{ type: "spring", stiffness: 200 }} className='hero-text'>
                    <h1>Graphics <span>and</span> Design</h1>
                    <h2>Content for Everyone</h2>
                    <h3>Find free PSD, Figma, CRD, AI, Sketch</h3>
                    <div className='row'>
                        <div className='search'>
                            <input type="text" placeholder="Search for something" name='Email'></input>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4' type='submit'>Subscribe</motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;