import React, { useState } from 'react'
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import { FaCloudUploadAlt } from "react-icons/fa";

import {Link } from 'react-router-dom';
const Doc= e =>{
    let {ms}={
        ms:'this file must be a .pdf or .txt file'
    }
    let [err , setErr]=useState('')
    let [success , setSuccess]=useState('')
   //now handle the upload action
    const upload= e =>{
        let getFile=e.target
        let theFile=getFile.files[0]
            //now match the pattern 
            let pattern=/.\pdf$/ig
            //check if the pattern matches 
            if(theFile.name.match(pattern)) {
               setSuccess(theFile.name)
            } else {
                setErr(ms)
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
                        <form action="" >
                            <label htmlFor="doc"  ><FaCloudUploadAlt style={{cursor:'pointer'}}/></label>
                            <input type="file" name="music" id="doc" style={{display:'none'}} onChange={upload}/>
                        </form>
                    </span>
                    <span className="ml-3">icon</span>
                </div>
                <main>
                              <small style={{color:'green'}}>{success}</small>
                            <small style={{color:'red'}}>{err}</small>
                    <h4 className="text-muted"> list of documets shared</h4>

                    {/* now set the ipload button */}
                        {success !== '' ? <Button>upload</Button> : ''}
                    <div className="songs">
                          
                 
                           
                                
                    </div>

                </main>
            </Container>
        </>
    )
}
export default Doc;