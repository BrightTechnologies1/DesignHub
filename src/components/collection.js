import React from 'react';
import { useState } from 'react';
import '../App.css';
import { motion } from "framer-motion"
import '../css/collection.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image1 from '../images/image1.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'

function Collection () {

    const [key, setKey] = useState('collection');

    return (
        <div className='collection container'>
            <div className='row'>
                <div className='collection-head '>
                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} defaultActiveKey="AI" className="mb-3">
                        <Tab eventKey="PSD" title="PSD" className='col'>
                            <div className='container col-12'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-12'>
                                        <img src={image1} alt=''></img>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image2} alt=''></img>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image3} alt=''></img>  
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="AI" title="AI" className='col'>
                            <div className='container col-12'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-12'>
                                        <img src={image4} alt=''></img>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image5} alt=''></img>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image3} alt=''></img>  
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="FIGMA" title="FIGMA" className='col'>
                            <div className='container col-12'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-12'>
                                        <img src={image6} alt=''></img>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image2} alt=''></img>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image4} alt=''></img>  
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Sketch" title="Sketch" className='col'>
                            <div className='container col-12'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-12'>
                                        <img src={image5} alt=''></img>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image4} alt=''></img>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image1} alt=''></img>  
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="CRD" title="CRD" className='col'>
                            <div className='container col-12'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-12'>
                                        <img src={image6} alt=''></img>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image4} alt=''></img>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-6'>
                                        <img src={image3} alt=''></img>  
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Collection;