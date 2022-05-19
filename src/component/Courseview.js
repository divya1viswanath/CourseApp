import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Courseview = () => {
    var [viewlist,setViewlist]=useState([])
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
    .then((response)=>{
      console.log(response.data)
      setViewlist(response.data)
    })
  return (
    <div>
        <Navbar/>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>                                                     
                        <th scope="col">Description</th>                                                     
                        <th scope="col">Venue</th>
                        <th scope="col">Date</th>
                        <th>Duration</th>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                        </tr>
                    </thead>
                    <tbody>
                        {viewlist.map((value,key)=>{
                         return <tr>
                          <td>{value.courseTitle}</td>
                          <td>{value.courseDescription}</td>
                          <td>{value.courseVenue}</td>
                          <td>{value.courseDate}</td>
                          <td>{value.courseDuration}</td>
                        </tr>
                        })}
                        
                        
                        
                    </tbody>
                    </table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Courseview