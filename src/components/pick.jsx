import React from 'react';
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import { FaMusic , FaPhotoVideo} from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import {Link } from 'react-router-dom';
const Pick=()=>{
   const style={
        width:300
    }
    const icon={
        fontSize:30
    }
    return (
        <>
           
                <section className="top">
            
                      <Row>
                        <Col className="col-lg-6 col-md-12  col-12 side">
                        <div className="part">
                                <span className="icons" style={{display:'flex',justifyContent:'space-between'}}>
                                    <p>back</p>
                                    <p>menu</p>
                                </span>
                                <div className="cont mt-4" style={ style} >
                                    <h3 id="with" className="ml-2" >SHARE WITH</h3>
                                 
                                    <p style={{color:'yellow '}} className="ml-2">
                                        people and the general public , files you will like them to know about 
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="">
                      
                       <Container>
                       <h5 className="text-muted mt-3" > PICK THE FILE TYPE</h5>
                            <div className="sec_part text-center">
                         
                                <Row>
                                  
                                    <Col >
                                       <Link to="music">
                                        <Card className="p-3 audio">
                                              
                                                <Card.Body>
                                                   <FaMusic style={icon}/>
                                                </Card.Body>
                                                <small className="text-muted">shared Audio</small>
                                            </Card>
                                       </Link>
                                    </Col>
                                    <Col>
                                      <Link to="pdf">
                                      <Card  className="p-3 video" >
                                         
                                            <Card.Body>
                                               <FaPhotoVideo style={icon}/>
                                            </Card.Body>
                                            <small className="text-muted">share GIF </small>
                                        </Card>
                                      </Link>
                                    </Col>  
                                    <Col>
                                     <Link to="photo">
                                     <Card  className="p-3 photo" >
                                       
                                            <Card.Body>
                                                <MdPhotoSizeSelectActual style={icon}/>
                                            </Card.Body>
                                            <small className="text-muted"> shared photo</small>
                                        </Card>
                                     </Link>
                                    </Col>    
                                    <Col>
                                        <Link to="doc">
                                        <Card  className="p-3 doc" >
                                          
                                            <Card.Body>
                                               <TiDocumentText style={icon}/>
                                            </Card.Body>
                                            <small className="text-muted">shared PDF</small>
                                        </Card>
                                        </Link>
                                    </Col>     
                                </Row>                                                     


                                <Row>

                                    
                                    
                                </Row>



                            </div>
                            </Container>
                        </Col>
                      </Row>
                
                </section>
    
            
        
        </>
    )
}
export default Pick;