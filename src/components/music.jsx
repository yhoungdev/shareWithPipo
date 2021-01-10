import React, { useState } from 'react'
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";


const Music=()=>{
    //now for the upload and match the type
  
    const uplaodMp= e =>{
       let file=e.target;
         let fileAll=file.files[0];
         let matchX=new RegExp(/.\mp3/)
          if(fileAll.name.match(matchX)) {
                setCloud(`name: ${fileAll.name}`)
          } else {
              
          }

    }
    //upload to cloud button 
 
  //stop the form action 
  const form=ev=> ev.preventDefault();

    let [cloud , setCloud]=useState('')
    return(
        <>
            <Container>
                <div className="music">
                    <span className="first">
                        <h3>SONGS</h3>
                  
                    </span>
                    <span className="mr-5">
                        <form action="" onSubmit={form}>
                            <label htmlFor="song" style={{cursor:'pointer'}} ><FaCloudUploadAlt/></label>
                            
                            <input type="file" name="music" id="song" onChange={uplaodMp} style={{display:'none'}}/>
                        </form> <br/>
                     
                        {cloud === '' ? '' : <Button>upload</Button>}
                    </span>
                    <span className="ml-3">icon</span>
                </div>
                <small> {cloud}</small>
                
                <main>
                    <h4 className="text-muted"> list of songs shared</h4>
                    <div className="songs">
                          
                                
                           
                                
                    </div>

                </main>
            </Container>
        </>
    )

    
}
export default Music;