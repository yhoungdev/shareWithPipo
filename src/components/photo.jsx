import React, { useState } from 'react'
import { Button , Card , Row , Col, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
var db;
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
              setSuccess(imgFile.name)

              db=()=>{
                 let storageRef=firebase.storage().ref(`Photo/${imgFile.name}`)
                 let other=storageRef.put(imgFile);
                 other.on('state_chane', snapshot=>{
                     console.log('uploaded ')
                 })
              }
              
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
                            <label htmlFor="img" style={{cursor:'pointer'}}><FaCloudUploadAlt/></label>
                            <input type="file" name="music" id="img" style={{display:'none'}} onChange={loadImg}/>
                        </form>
                    </span>
                    <span className="ml-3">icon</span>
                </div>
                <main>
                    <small style={{color:'red'}}>{err}</small>
                    <small style={{color:'green'}}>{success}</small>
                   {success === '' ? '':<Button onClick={db}>upload</Button>}
                    <h4 className="text-muted"> list of imges shared</h4>
                  
                    <div className="songs">
                 
                    </div>

                </main>
            </Container>
        </>
    )
}
export default Photo;