import React from 'react'
import Back from '../components/back'
import { useParams } from 'react-router-dom'
import documents from '../data/documents'

const SinglePost = () => {
    const { id } = useParams()

    const selectedDocument = documents.find(document => document.id === +id)

    return (
        <div className='w-full'>
            <Back />
            <div className='p-4 border border-gray-400 bg-white mt-4 rounded-md flex items-center gap-6'>
                <div className='w-[150px]'>
                    <img src={`/studentdocs/assets/${selectedDocument.format.toLowerCase()}.png`} alt={selectedDocument.format.toLowerCase()} />
                </div>
                <div className='flex-grow'>
                    <h1 className='text-3xl font-semibold'>{selectedDocument.name}</h1>
                    <p className='text-gray-600 mb-4'>{selectedDocument.course}</p>
                    <p className='font-semibold'><span className='font-normal'>Teacher:</span> {selectedDocument.teacher}</p>
                    <div className='font-semibold'><span className='font-normal'>Classes:</span> {selectedDocument.class}</div>
                    <p className='font-semibold'><span className='font-normal'>Format:</span> {selectedDocument.format}</p>
                    <p className='font-semibold'><span className='font-normal'>Size:</span> {selectedDocument.size}</p>
                    <a href="">
                        <button className='text-white bg-blue-700 w-fit px-5 py-2 hover:bg-blue-800 rounded-md transition my-4'>Download</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SinglePost