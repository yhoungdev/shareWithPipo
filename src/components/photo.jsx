import React from 'react'
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const Photo=()=>{
    const form=ev=> ev.preventDefault();
    const loadImg= e =>{
        let file=e.target;
        
    }

  
    return(
        <>
                 <Container>
                <div className="music">
                    <span className="first">
                        <h3>SHAREME</h3>
                    </span>
                    <span className="mr-5">
                        <form action="" onSubmit={form}>
                            <label htmlFor="img">load</label>
                            <input type="file" name="music" id="img" style={{display:'none'}}/>
                        </form>
                    </span>
                    <span className="ml-3">icon</span>
                </div>
                <main>
                    <h4 className="text-muted"> list of iamges shared</h4>
                    <div className="songs">
                          
                                
                           
                                
                    </div>

                </main>
            </Container>
        </>
    )
}
export default Photo;