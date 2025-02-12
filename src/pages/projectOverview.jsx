import React from 'react'
import Back from '../components/back'

const ProjectOverview = () => {
    return (
        <div className='w-[90%] md:w-[500px] mx-auto flex flex-col gap-3 my-12'>
            <Back />
            <div className='why-i-built-this bg-white p-6 rounded-md shadow-md flex flex-col gap-2'>
                <h1 className='text-blue-700 font-semibold text-xl'>⚙️ Why I Built This?</h1>
                <p className='text-gray-800'>This project was developed to address the inefficiencies of traditional document sharing in educational settings. By creating a central repository for all class materials, this platform aims to improve the learning experience for both teachers and students. Teachers can streamline their workflow by uploading documents only once, saving valuable time and effort.

                    Simultaneously, students, including those who join the class later, gain easy access to all necessary materials, ensuring they have the resources they need to succeed. This centralized system ultimately fosters a more efficient and streamlined learning environment for the entire educational community.</p>
            </div>
            <div className='who-am-i bg-white p-6 rounded-md shadow-md flex flex-col gap-2'>
                <h1 className='text-blue-700 font-semibold text-xl'>😁 Who are we?</h1>
                <p>We are Suhaib Faisal and Nima'n Abdillahi, Computer Science students in the 3C class at the University of Hargeisa. Both of us share a passion for developing innovative solutions that make a real impact. This project is a reflection of our dedication to applying our programming skills to solve real-world problems, particularly in the education sector. By leveraging technology, we aim to improve accessibility, streamline processes, and create user-friendly solutions that benefit students</p>
            </div>
            {/* <div className='reach-me bg-white p-6 rounded-md shadow-md flex flex-col gap-2'>
                <h1 className='text-blue-700 font-semibold text-xl'>📞 Reach me</h1>
                <ul>
                    <li><span><i class="fa-regular fa-envelope"></i></span> <a href="mailto:zuhaybhamar@gmail.com" target='_blank' className='text-blue-700 hover:underline transition'>zuhaybhamar@gmail.com</a></li>
                    <li><span><i class="fa-brands fa-instagram"></i></span> <a href="https://www.instagram.com/zuhaib__faisal?igsh=MTJ0czB5OWFpbDNo&utm_source=qr" target='_blank' className='text-blue-700 hover:underline transition'>Instagram</a></li>
                    <li><span><i class="fa-brands fa-whatsapp"></i></span> <a href="https://www.instagram.com/zuhaib__faisal?igsh=MTJ0czB5OWFpbDNo&utm_source=qr" target='_blank' className='text-blue-700 hover:underline transition'>Whatsapp</a></li>
                </ul>
            </div> */}
        </div>
    )
}

export default ProjectOverview