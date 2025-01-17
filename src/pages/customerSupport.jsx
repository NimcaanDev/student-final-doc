import React from 'react'
import Back from '../components/back'

const CustomerSupport = () => {
    return (
        <div className='w-[80%] md:w-[500px] mx-auto my-10 flex flex-col gap-4'>
            <Back />
            <div className='feedback bg-white p-5 rounded-md flex flex-col gap-2 shadow-md'>
                <h1 className='text-blue-700 font-semibold text-xl'>✉️ Feedback & Comments</h1>
                <h3>Share Your Thoughts</h3>
                <p>We value your input! Your feedback helps us improve StudentDocs and make it even better for everyone.</p>
                <p>Please take a moment to share your thoughts and suggestions.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdenEI7C3_0xHrMs6OS_Zes3ejEa7X3BCRw11iKtWbqHZo5LQ/viewform?usp=header" target='_black' className='mt-4'>
                    <button className='bg-blue-700 px-5 py-2 rounded-md text-white hover:bg-blue-800 transition'>Fill this Google form ✨</button>
                </a>
            </div>
            <div className='feedback bg-white p-5 rounded-md flex flex-col gap-2 shadow-md'>
                <h1 className='text-blue-700 font-semibold text-xl'>✅ Get Help</h1>
                <h3>Submit an inquiry using the form below or contact us via <a href="https://www.instagram.com/zuhaib__faisal?igsh=MTJ0czB5OWFpbDNo&utm_source=qr" className='text-blue-700 hover:underline transition' target='_blank'>Instagram</a> or <a href="https://api.whatsapp.com/send?phone=+252634541983" className='text-blue-700 hover:underline transition' target='_blank'>WhatsApp</a>.</h3>
                <form action="" className='w-full mt-5 flex flex-col gap-2'>
                    <input type="text" placeholder='Your Name' className='bg-gray-200 px-3 py-2 w-full rounded-md' required />
                    <input type="email" placeholder='Your Email Address' className='bg-gray-200 px-3 py-2 w-full rounded-md' required />
                    <input type="text" placeholder='Subject' className='bg-gray-200 px-3 py-2 w-full rounded-md' required />
                    <textarea name="message" id="message" rows={5} placeholder='Message' className='bg-gray-200 px-3 py-2 w-full rounded-md resize-none' required></textarea>
                    <input type="submit" name="send" id="send" value={'Send'} className='bg-blue-700 py-2 rounded-md text-white hover:bg-blue-800 transition cursor-pointer' />
                </form>
            </div>
        </div>
    )
}

export default CustomerSupport