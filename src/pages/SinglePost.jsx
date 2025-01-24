import React, { useEffect } from 'react';
import Back from '../components/back';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDocument } from '../../redux/slices/documentSlice';
import Loading from '../components/loading';

const SinglePost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const singleDocumentState = useSelector(state => state.document);
    const selectedDocument = singleDocumentState.singleData?.selectedDocument;

    const downloadUrl = `${selectedDocument?.link.replace('/upload/', '/upload/fl_attachment/')}`;

    useEffect(() => {
        if (id) {
            dispatch(getSingleDocument(id));
        }
    }, [dispatch, id]);


    return (
        <div className='w-full bg-transparent'>
            <Back />

            {singleDocumentState.singleError ? (
                <ErrorAlert message={singleDocumentState.singleError} />
            ) : (
                singleDocumentState.singleIsLoading ? (
                    <Loading />
                ) : selectedDocument ? (
                    <div className='py-6 px-6 md:px-10 border border-gray-400 bg-white mt-4 rounded-md flex items-center gap-8'>
                        <div className='w-[150px]'>
                            <img
                                src={`/studentdocs/assets/${selectedDocument.file_type.toLowerCase()}.png`}
                                alt={selectedDocument.file_type.toLowerCase()}
                            />
                        </div>
                        <div className='flex-grow'>
                            <div className='flex flex-col gap-2 max-w-[200px]'>
                                <div className='flex gap-5'>
                                    <div className='text-gray-800'>Name:</div>
                                    <div>{selectedDocument.name}</div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-gray-800'>Teacher:</div>
                                    <div>{selectedDocument.user.username}</div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-gray-800'>Course:</div>
                                    <div>{selectedDocument.course.name}</div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-gray-800'>Classes:</div>
                                    <div>
                                        {
                                            selectedDocument.classes.map(cls => cls.class.name).join(', ') || "No Classes"
                                        }
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-gray-800'>File type:</div>
                                    <div>
                                        <div>
                                            {selectedDocument.file_type}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='text-gray-800'>Size:</div>
                                    <div>{selectedDocument.size}KB</div>
                                </div>
                            </div>

                            <div>
                                {selectedDocument?.link && (
                                    <div className='flex gap-2'>
                                        <a href={downloadUrl} download={selectedDocument?.name}>
                                            <button className='text-white bg-blue-700 w-fit px-5 py-2 hover:bg-blue-800 rounded-md transition my-4'>
                                                Download
                                            </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-600 mt-4">Document not found.</p>
                )
            )}
        </div >
    );
};

export default SinglePost;
