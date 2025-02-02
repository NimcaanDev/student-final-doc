import * as React from "react";
import { AlertDialog } from "radix-ui";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { deleteCourseFn } from "../../../../redux/slices/courseSlices/deleteCourseSlice";
import { deleteFacultyFn } from "../../../../redux/slices/facultySlices/deleteFacultySlice";

const DeleteFacultyAlert = ({ faculty_id }) => {
    const deleteFacultyState = useSelector(state => state.deleteFaculty)
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(deleteFacultyFn(faculty_id))
    }
    const successToastId = 'success-toast'

    useEffect(() => {
        if (deleteFacultyState?.error) {
            toast.error(deleteFacultyState.error, {
                toastId: successToastId,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

        if (deleteFacultyState?.data?.isSuccess) {
            toast.success("Deleted Successfully", {
                toastId: successToastId,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }, [deleteFacultyState.data, deleteFacultyState.error]);

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button className="inline-flex items-center justify-center rounded bg-violet4 px-2 py-2 font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
                    <FaTrash />
                </button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
                <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow bg-gray-800 text-white">
                    <AlertDialog.Title className="m-0 text-[17px] font-medium text-mauve12">
                        Are you absolutely sure?
                    </AlertDialog.Title>
                    <AlertDialog.Description className="mb-5 mt-[15px] text-[15px] leading-normal text-mauve11">
                        This action cannot be undone. This will permanently removed
                    </AlertDialog.Description>
                    <div className="flex justify-end gap-[25px]">
                        <AlertDialog.Cancel asChild>
                            <button className="inline-flex h-[35px] items-center justify-center rounded bg-mauve4 px-[15px] font-medium leading-none text-mauve11 outline-none outline-offset-1 hover:bg-mauve5 focus-visible:outline-2 focus-visible:outline-mauve7 select-none">
                                Cancel
                            </button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <button className="inline-flex h-[35px] items-center justify-center rounded bg-red-600 px-[15px] font-medium leading-none text-red-100 outline-none outline-offset-1 hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-red-500 select-none" onClick={deleteHandler}>
                                Yes, delete account
                            </button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
            <ToastContainer />
        </AlertDialog.Root>
    )
};

export default DeleteFacultyAlert;
