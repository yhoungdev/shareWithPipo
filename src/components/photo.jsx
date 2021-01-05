import React, { useState } from 'react'
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';

const Photo=()=>{
    const form=ev=> ev.preventDefault();
    //now set the hooks 
    let [err , setErr]=useState('')
    let [success , setSuccess]=useState('')
    let {obj}={obj:'this file type dosnt match, it must be an image '}
    const loadImg= e =>{
        let file=e.target;
        let imgFile=file.files[0]
        let pattern=/.\png|.\jpg|.\jpeg/ig
          //check if the pattern matches 
          if(imgFile.name.match(pattern)){
              console.log('matchedd')
          } else {
              setErr(obj)
          }
        
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
                            <label htmlFor="img" style={{cursor:'pointer'}}>load</label>
                            <input type="file" name="music" id="img" style={{display:'none'}} onChange={loadImg}/>
                        </form>
                    </span>
                    <span className="ml-3">icon</span>
                </div>
                <main>
                    <h4 className="text-muted"> list of iamges shared</h4>
                    <small>{err}</small>
                    <div className="songs">
                        
                          
                                
                           
                                
                    </div>

                </main>
            </Container>
        </>
    )
}
export default Photo;