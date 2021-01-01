import React from 'react';
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import { FaMusic , FaPhotoVideo} from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";

import { IoDocumentTextSharp } from "react-icons/io";

import {Link } from 'react-router-dom';
const Pick=()=>{
   const style={
        width:90
    }
    return (
        <>
           
                <section className="top">
                    <Container>
                      <Row>
                        <Col className="col-lg-6 col-md-12  col-12">
                        <div className="part">
                                <span className="icons" style={{display:'flex',justifyContent:'space-between'}}>
                                    <p>back</p>
                                    <p>menu</p>
                                </span>
                                <div className="cont" style={style} >
                                    <h3>your objective</h3>
                                </div>
                            </div>
                        </Col>
                        <Col className="">
                            <div className="sec_part text-center">
                                <Row>
                                    <Col >
                                       <Link to="music">
                                        <Card className="pt-2 pl-4 pr-4">
                                                <Card.Title>
                                                    teat
                                                </Card.Title>
                                                <Card.Body>
                                                   <FaMusic/>
                                                </Card.Body>
                                            </Card>
                                       </Link>
                                    </Col>
                                    <Col>
                                      <Link to="">
                                      <Card  className="pt-2 pl-4 pr-4">
                                            <Card.Title>
                                                test
                                            </Card.Title>
                                            <Card.Body>
                                               <FaPhotoVideo/>
                                            </Card.Body>
                                        </Card>
                                      </Link>
                                    </Col>  
                                    <Col>
                                     <Link to="photo">
                                     <Card  className="pt-2 pl-4 pr-4">
                                            <Card.Title>
                                                test
                                            </Card.Title>
                                            <Card.Body>
                                                <MdPhotoSizeSelectActual/>
                                            </Card.Body>
                                        </Card>
                                     </Link>
                                    </Col>    
                                    <Col>
                                        <Link to="doc">
                                        <Card  className="pt-2 pl-4 pr-4">
                                            <Card.Title>
                                                test
                                            </Card.Title>
                                            <Card.Body>
                                               doc
                                            </Card.Body>
                                        </Card>
                                        </Link>
                                    </Col>     
                                </Row>                                                     



                            </div>
                        </Col>
                      </Row>
                    </Container>
                </section>
            
        
        </>
    )
}
export default Pick;