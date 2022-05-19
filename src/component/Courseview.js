import React from 'react'
import Navbar from './Navbar'

const Courseview = () => {
    var viewlist=[{"_id":"6285a2a31887dc001619415c","courseTitle":"Python Django Internship","courseDescription":"Internship programme","courseDuration":"3 months","courseVenue":"ONLINE","courseDate":"02/01/2023"},{"_id":"6285a2c21887dc001619415d","courseTitle":"MERN Stack","courseDescription":"Internship programme","courseDuration":"6 months","courseVenue":"ONLINE","courseDate":"02/06/2022"}]
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
                        <th scope="col">Employee ID</th>                                                     
                        <th scope="col">Employee Name</th>                                                     
                        <th scope="col">Designation</th>
                        <th scope="col">Salary</th>
                        <th>Company Name</th>                                                       
                        <th>DOB</th>
                        <th>Email</th>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                        </tr>
                    </thead>
                    <tbody>
                        {viewlist.map((value,key)=>{
                        return <tr>
                        <td>{value['Employee ID']}</td>
                        <td>{value['Employee Name']}</td>
                        <td>{value.Designation}</td>
                        <td>{value.Salary}</td>
                        <td>{value['Company Name']}</td>
                        <td>{value.DOB}</td>
                        <td>{value.Email}</td>
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