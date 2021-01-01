
import React from 'react'
import {useState } from 'react'
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Main=()=>{
 
    let [count , setCount]=useState('0')
    return(
      
        <>
           <Container>
                 <div className="page text-center">
                     <h4>DocMe Now</h4>
                     <p className="text-muted">
                         back up all your files to the cloud with ease and with out any stress
                     </p>
                     <Link to="pick">
                         <Button>GET STARTED</Button>
                     </Link>
                 </div>
                 {count}
                
           </Container>
                </>
    )
}
export default Main;