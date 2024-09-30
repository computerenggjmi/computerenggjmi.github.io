import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
    return(
        <div className="main-footer-end bg-green-deep text-slate-50 p-6 text-center">
            <span className=' mb-6 md:mb-0'>Copyright© Department of Computer Engineering {new Date().getFullYear()}</span>
            <a href='/people/developer'><span className=' p-3 rounded-2xl bg-green-yellow'>Web Development Team</span></a>
            <span className='mt-6 md:mt-0'>Jamia Millia Islamia, New Delhi, 110025</span>
        </div>
    )
}

export default MainFooter;