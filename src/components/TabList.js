import React, { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import './TabList.css'
function TabList() {
    const [selectedTab, setSelectedTab] = useState(0);
    // const tabs = ['Weak 1', 'Weak 2'];
    const tabs = [{ day: "MONDAY", date: "january 14,2019" }, { day: "TUESDAY", date: "january 14,2019" }, { day: "WEDNESDAY", date: "january 14,2019" }]

    return (
        <div className='bg-[#151853] text-white pt-[10%] pl-[5%] pr-[5%] pb-[10%]'>
            <div className=' '>
                <div className='text-center '>
                    <h1 className='text-[#BE41AE]'>OUR TIMETABLE</h1>
                    <h1 className='text-3xl'>SCHEDULE PLAN</h1>
                </div>
                <div className=' ml-auto mr-auto mt-16 bg-[#1F2371] w-[30%] text-gray-400'>
                    <ul className='flex space-x-12 cursor-pointer w-full'>
                        {tabs.map((tab, index) => (
                            <li
                                key={index}
                                className={selectedTab === index ? 'active' : ''}
                                onClick={() => setSelectedTab(index)}
                            >
                                {/* {tab} */}
                                <h1>{tab.day}</h1>
                                <p>{tab.date}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mt-12'>
                    {selectedTab === 0 && <Tab1 />}
                    {selectedTab === 1 && <Tab2 />}
                    {selectedTab === 2 && <Tab3 />}


                </div>
            </div>
        </div>
    );
}

export default TabList;
