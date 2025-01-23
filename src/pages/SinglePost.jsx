import React, { useEffect } from 'react';
import Back from '../components/back';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleDocument } from '../../redux/slices/documentSlice';
import { Badge, Code, DataList, Flex } from '@radix-ui/themes';
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
                            {/* <h1 className='text-3xl font-semibold'>{selectedDocument.name}</h1>
                        <p className='text-gray-600 mb-4'>{selectedDocument.course?.name || "Unknown Course"}</p>
                        <p className='font-semibold'><span className='font-normal'>Teacher:</span> {selectedDocument.user?.username || "Unknown"}</p>
                        <div className='font-semibold'><span className='font-normal'>Classes:</span> {selectedDocument.classes?.map(cls => cls.class).join(', ') || "No Classes"}</div>
                        <p className='font-semibold'><span className='font-normal'>Format:</span> {selectedDocument.file_type}</p>
                        <p className='font-semibold'><span className='font-normal'>Size:</span> {selectedDocument.size} KB</p> */}
                            <DataList.Root>
                                <DataList.Item>
                                    <DataList.Label minWidth="88px">Name</DataList.Label>
                                    <DataList.Value>{selectedDocument.name}</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label minWidth="88px">Teacher</DataList.Label>
                                    <DataList.Value>{selectedDocument.user.username}</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label minWidth="88px">Course</DataList.Label>
                                    <DataList.Value>{selectedDocument.course.name}</DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label minWidth="88px">Classes</DataList.Label>
                                    <DataList.Value>
                                        {
                                            selectedDocument.classes.map(cls => cls.class.name).join(', ') || "No Classes"
                                        }
                                    </DataList.Value>
                                </DataList.Item>
                                <DataList.Item align="center">
                                    <DataList.Label minWidth="88px">File type</DataList.Label>
                                    <DataList.Value>
                                        <Badge color="jade" variant="soft" radius="full">
                                            {selectedDocument.file_type}
                                        </Badge>
                                    </DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label minWidth="88px">Link</DataList.Label>
                                    <DataList.Value>
                                        <Flex align="center" gap="2">
                                            <Code variant="ghost">{window.location.href}</Code>
                                        </Flex>
                                    </DataList.Value>
                                </DataList.Item>
                                <DataList.Item>
                                    <DataList.Label minWidth="88px">Size</DataList.Label>
                                    <DataList.Value>{selectedDocument.size}KB</DataList.Value>
                                </DataList.Item>
                            </DataList.Root>

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
        </div>
    );
};

export default SinglePost;
