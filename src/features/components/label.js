import React from 'react'
import DropDown from './dropDown.js'


const Label=()=>{
    return(
        <div className=''>
            <h5 className='text-center'>Labeling</h5>
            <div className='d-flex flex-wrap justify-content-between '>
                <DropDown label={"FAULT TYPE"} defaultValue={"Refregerant Lean"} additionalValue={"Other"}  />
                <DropDown label={"SEVRITY"} defaultValue={"Low"} additionalValue={"Other Action"} />
                <DropDown label={"SENSOR SIGNAL"} defaultValue={"Plant EMG"}  additionalValue={"Other"}/>
                <div className='col-md-2'>
                    <div className='dropdown '>
                        <div className="dropdown col-lg-12" data-toggle="dropdown">
                           
                            <span className="btn dropdown-toggle px-3">  Edit All </span>  
                            <div class="dropdown-menu col-lg-12">
                                <div className="dropdown-item"> 
                                    Other
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               <div className='col-lg-8'>
                    <div className='d-flex flex-wrap justify-content-around py-2'>
                        <div className='' >
                            <div className='dropdown  border rounded'>
                                <div className="dropdown col-lg-12 " data-toggle="dropdown">
                                
                                    <span className="btn dropdown-toggle px-3">Add Graph</span>  
                                    
                                        <ul className='dropdown-menu px-1'>
                                            <li className="small" data-value="option1" tabIndex="-1"> 
                                                <input type="checkbox"/>
                                                &nbsp;Option 1
                                            </li>
                                            <li className="small" data-value="option1" tabIndex="-1"> 
                                                <input type="checkbox"/>
                                                &nbsp;Option 2
                                            </li>
                                            <li className="small" data-value="option1" tabIndex="-1"> 
                                                <input type="checkbox"/>
                                                &nbsp;Option 3
                                            </li>
                                            
                                        </ul>
                                
                                
                                </div>
                            </div>
                        </div>
                        <div className=' p-1  justify-content-center' >
                            <div className='d-flex justify-content-around'>
                                <div className='p-1 align-items-center'>
                                    <i className="fa fa-th-list"  style={{color:'#EDEDED', fontSize:25}}></i>
                                </div>
                                <div className='p-1 align-items-center'>
                                    <i className="fa fa-square" style={{color:'#EDEDED', fontSize:26}}></i>
                                </div>
                                <div className='p-1 align-items-center'>
                                    <i className="fa fa-bars" style={{color:'#23c49e', fontSize:26}}></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-6' >
                            <button type="button" className="btn text-white" style={{backgroundColor :'#23c49e'}}><i className="fa fa-plus px-1" style={{color:'#fff',fontSize:20}}></i>Add as Anomaly</button>
                        </div>  
                    </div> 
               </div>
                
               
            
        </div>
    )
}
export default Label