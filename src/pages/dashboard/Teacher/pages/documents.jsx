import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorAlert from "../../../../components/errorAlert";
import Loading from "../../../../components/loading";
import { getDocuments } from "../../../../../redux/slices/documentSlices/documentSlice";
import { FaPen, FaTrash } from "react-icons/fa";

const DocumentsTeacher = () => {
    const documentState = useSelector((state) => state.document);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDocuments());
    }, [dispatch]);

    if (documentState.error) return <ErrorAlert message={documentState.error} />;
    if (documentState.isLoading) return <Loading />;

    return (
        <div>
            {documentState.data?.documents?.length > 0 ? (
                <table className="table-fixed w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="px-3 py-2 border">ID</th>
                            <th className="px-3 py-2 border">Name</th>
                            <th className="px-3 py-2 border">Description</th>
                            <th className="px-3 py-2 border">Faculty</th>
                            <th className="px-3 py-2 border">Teacher</th>
                            <th className="px-3 py-2 border">Course</th>
                            <th className="px-3 py-2 border">Classes</th>
                            <th className="px-3 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documentState.data.documents.map((document) => (
                            <tr key={document.id} className="border-b hover:bg-gray-50">
                                <td className="px-3 py-1 text-sm text-gray-900 border">
                                    {document.id.length > 10 ? document.id.slice(0, 10) + "..." : document.id}
                                </td>
                                <td className="px-3 py-1 text-sm text-gray-900 border">
                                    {document.name}
                                </td>
                                <td className="px-3 py-1 text-sm text-gray-900 border">
                                    {document.description || "No description"}
                                </td>
                                <td className="px-3 py-1 text-sm text-gray-900 border">
                                    {document.faculty?.name || "N/A"}
                                </td>
                                <td className="px-3 py-1 text-sm text-gray-900 border">
                                    {document.user.username || "N/A"}
                                </td>
                                <td className="px-3 py-1 text-sm text-gray-900 border">
                                    {document.course?.name || "No Course"}
                                </td>
                                <td className="px-3 py-1 text-sm text-gray-900 border">
                                    {document.classes?.map((cls) => cls.class.name).join(", ") || "No Classes"}
                                </td>
                                <td>
                                    <div className="flex justify-center items-center gap-2">
                                        <button className="bg-blue-700 text-white px-2 py-2 text-sm rounded-md hover:bg-blue-700">
                                            <FaPen />
                                        </button>
                                        <button className="bg-red-700 text-white px-2 py-2 text-sm rounded-md hover:bg-blue-700">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <table className="table-fixed w-full border-collapse border border-gray-300">
                    <tbody>
                        <tr>
                            <td colSpan={7} className="text-center py-4 text-gray-600 border">
                                No faculty members found.
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DocumentsTeacher;
