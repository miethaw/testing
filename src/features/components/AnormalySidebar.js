import React from 'react'
import { Progress } from 'reactstrap';

import Logo from '../../assets/ecomlogo.jpeg'
import Dot from '../../assets/dot.png'


const Ecom = () => {
    return (
        <div className='bg-white p-3' >
            <div className="pt-3 pb-5">
                <img src={Logo} alt='LoGo' className='img-fluid' />
            </div>
            <div className='h4 px-1' style={{ lineHeight: 0.4 }}>Anomalies</div>
            <div className='dropdown pb-4'>
                <a className="btn dropdown-toggle px-1" href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    Sort By TimeFrame
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                    <a className='dropdown-item' href='#'>Other</a>
                    <a className='dropdown-item' href='#'>Other Action</a>
                </div>
            </div>
            <div className=' shadow-lg pt-0 mb-4 bg-white-rounded rounded-sm' style={{ backgroundColor: '#23c49e', lineHeight: 0 }}>
                <div className='p-4 text-white' >
                    <p> 34 of 123 Detections</p>
                    <Progress color='success' value='34' style={{ height: 6 }} />
                </div>
            </div>
            <AnormalyByTimeFrameItem date="Mon 23, Jan" time="10:47.45-16:00" selected deletedIconShowed />
            <AnormalyByTimeFrameItem date="Mon 24, Jan" time="13:22.39-16:00" />
            <AnormalyByTimeFrameItem date="Mon 24, Jan" time="13:22.39-16:00" />
            <AnormalyByTimeFrameItem date="Mon 24, Jan" time="13:22.39-16:00" />
            <AnormalyByTimeFrameItem date="Mon 24, Jan" time="13:22.39-16:00" />
            <div className='d-flex pt-3 pb-5'>
                <div className='col'>
                    New Detection
                    </div>
                <div className='pr-3'>
                    <div type='button' className="px-1 border rounded" onClick value='text'>
                        <i className="fa fa-plus-square" style={{ color: '#23c49e', fontSize: 20 }}></i>
                    </div>
                </div>
            </div>
            <div className='pt-5'>
                <div className='mt-5 text-center border border-bottom-0 border-left-0 border-right-0 p-3'>
                    <h5>View History</h5>
                </div>
            </div>
        </div>

    )
}

export default Ecom

const AnormalyByTimeFrameItem = ({ selected = false, date = "", time = "", deletedIconShowed = false }) => {
    return (
        <div className='d-flex border border-top-0 border-left-0 border-right-0 p-2'>
            <div className=' p-2'>
                {selected ?
                    <i class="fa fa-circle" style={{ color: '#23c49e', fontSize: 13 }}></i>
                    :
                    // <img src={"/dot.png"} alt='dot' style={{ width: 10 }} />
                    <img src={Dot} alt='dot' style={{ width: 10 }} />

                }
            </div>
            <div className='col'>
                <p className='pt-2' style={{ fontSize: 13, lineHeight: 0 }}>{date}</p>
                <h5 style={{ color: selected ? '#23c49e' : undefined }}>{time}</h5>
            </div>
            <div className='pt-2 pr-4'>
                {deletedIconShowed && <i className="fa fa-trash" style={{ color: '#23c49e', fontSize: 20 }}></i>}
            </div>
        </div>
    )
}
