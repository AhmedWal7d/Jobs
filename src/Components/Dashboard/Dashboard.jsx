import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SidbarDashboard from './SidbarDashboard/SidbarDashboard';

export default function Dashboard() {
  // حالة للتحكم في إظهار أو إخفاء الشريط الجانبي
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // دالة لتبديل حالة الشريط الجانبي
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className={isSidebarVisible ? 'col-10 mt-3' : 'col-12 mt-3'}>
          <Outlet />
        </div>
        {isSidebarVisible && (
          <div className='col-2'>
            <SidbarDashboard />
          </div>
        )}
        {/* <Footer /> */}
      </div>
    </div>
  );
}


















// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
// import Navbar from './Navbar/Navbar'
// import Footer from './Footer/Footer'
// import SidbarDashboard from './SidbarDashboard/SidbarDashboard'

// export default function Dashboard() {
//     return <>

//         <div className='container-fluid '>

//             <div className='row'>
//                 <Navbar />
//                 <div className='col-10 mt-3'>
//                     <Outlet></Outlet>
//                 </div>
//                 <div className='col-2 mt-3'>
//                     <SidbarDashboard />
//                 </div>
//                 <Footer/>
//             </div> 
//         </div>
//     </>
// }
