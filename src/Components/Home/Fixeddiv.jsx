import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { CiClock2 } from "react-icons/ci";
import { MdOutlineHistory } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function Fixeddiv() {
    return (
        <>
            <div className='container mt-5 pt-0 d-sm-none'>
                <div className='position-relative'>
                    <div className='fixeddiv'>
                        <div className='row'>
                            <div className='col-2'>
                                <div className='d-center flex-column'>
                                    <CiClock2 className='font-25 ' />
                                    <p className='mb-0 ms-2 d-block'>Orders</p>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='d-center flex-column'>
                                    <AiOutlineMessage className='font-25 ' />
                                    <p className='mb-0 ms-2 d-block'>Chat</p>
                                </div>
                            </div>
                            <div className='col-4 d-center'>
                                <div className='d-center flex-column FaLocationDot'>
                                    <FaLocationDot className='font-25 ' />
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='d-center flex-column'>
                                    <MdOutlineHistory className='font-25 ' />
                                    <p className='mb-0 ms-2 d-block'>History</p>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='d-center flex-column'>
                                    <IoHomeOutline className='font-25' />
                                    <p className='mb-0 ms-2 d-block'>Home</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
