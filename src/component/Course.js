import React, { useState } from 'react'
import View from './Header'

const Course = () => {
    var [Ctitle,setCtitle]=useState("")
    var [Cdue,setCdue]=useState("")
    var [Des,setDes]=useState("")
    var [Ven,setVen]=useState("")
    var [dat,setdat]=useState("")

const subData =() => { 
    const data={"Ctitle":Ctitle,"Cdue":Cdue,"Des":Des,"Ven":Ven,"dat":dat}
    console.log(data)
}
  return (
    <div>
        
         <div className="container">
            <div className="row">                                                                              
                <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Course Title</label>
                            <input onChange={(e)=>{setCtitle(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Course Duration</label>
                            <input onChange={(e)=>{setCdue(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Description </label>
                            <input onChange={(e)=>{setDes(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Venue</label>
                            <input onChange={(e)=>{setVen(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Date</label>
                            <input onChange={(e)=>{setdat(e.target.value)}} type="date" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button onClick={subData} value="register" className="btn btn-success">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course