import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorAlert from "../../../../components/errorAlert";
import Loading from "../../../../components/loading";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { getAllClassesFn } from "../../../../../redux/slices/classSlices/classSlice";
import { getAllCourses } from "../../../../../redux/slices/courseSlice";

const CourseTeacher = () => {
    const courseState = useSelector((state) => state.course);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCourses())
    }, [dispatch]);

    if (courseState.error) return <ErrorAlert message={courseState.error} />;
    if (courseState.isLoading) return <Loading />;

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-bold text-xl text-blue-700">Course</h1>
                <button className="text-white bg-blue-700 w-fit px-5 py-2 hover:bg-blue-800 rounded-md transition flex gap-2 items-center"><FaPlus /> New Course</button>
            </div>
            {courseState.data?.courses?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-fixed w-[200%] md:w-full border-collapse border border-gray-300 bg-white shadow-md">
                        <thead>
                            <tr className="bg-blue-200">
                                <th className="px-3 py-2 border">ID</th>
                                <th className="px-3 py-2 border">Name</th>
                                <th className="px-3 py-2 border">Semester</th>
                                <th className="px-3 py-2 border">Faculty</th>
                                <th className="px-3 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseState.data.courses.map((course) => (
                                <tr key={course.id} className="border-b hover:bg-gray-50">
                                    <td className="px-3 py-1 text-sm text-gray-900 border">
                                        {course.id.length > 10 ? course.id.slice(0, 10) + "..." : course.id}
                                    </td>
                                    <td className="px-3 py-1 text-sm text-gray-900 border">
                                        {course.name}
                                    </td>
                                    <td className="px-3 py-1 text-sm text-gray-900 border">
                                        {course.semester || "No description"}
                                    </td>
                                    <td className="px-3 py-1 text-sm text-gray-900 border">
                                        {course.faculty.name || "N/A"}
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
                </div>
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

export default CourseTeacher;
