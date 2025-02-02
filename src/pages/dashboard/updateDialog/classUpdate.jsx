import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FaPen } from "react-icons/fa";
import { useFormik } from "formik";
import { Dialog } from "radix-ui";
import { Bounce, toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import Loading from "../../../components/loading";
import { getSingleClassFn } from "../../../../redux/slices/classSlices/getSingleClassSlice";
import { updateClassFn } from "../../../../redux/slices/classSlices/updateClassSlice";
import { getAllFaculties } from "../../../../redux/slices/facultySlice";

const UpdateClass = ({ class_id }) => {
    const updateState = useSelector(state => state.updateClass);
    const selectedClassState = useSelector(state => state.singleClass);
    const successToastId = 'success-toast';

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFaculties());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit(values) {
            const data = {
                id: class_id,
                name: values.name,
            };

            dispatch(updateClassFn(data));
        },
        validationSchema: yup.object({
            name: yup.string().required("Please enter the name"),
        }),
    });

    useEffect(() => {
        if (updateState?.error) {
            toast.error(updateState.error, {
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

        if (updateState?.data?.isSuccess) {
            toast.success("Uploaded Successfully", {
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
    }, [updateState.data, updateState.error]);

    const handleDialogOpen = () => {
        dispatch(getSingleClassFn(class_id));
    };

    useEffect(() => {
        if (selectedClassState.singleData?.singleClass) {
            formik.setValues({
                name: selectedClassState.singleData.singleClass.name || '',
            });
        }
    }, [selectedClassState.singleData]);

    return selectedClassState.singleLoading ? <div className="bg-gray-800"><Loading /></div> : (
        <Dialog.Root onOpenChange={handleDialogOpen}>
            <Dialog.Trigger asChild>
                <button className="inline-flex items-center justify-center rounded bg-violet4 px-2 py-2 font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
                    <FaPen />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-md focus:outline-none data-[state=open]:animate-contentShow bg-gray-800 text-white">
                    <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
                        Update Class
                    </Dialog.Title>
                    <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
                        Make changes to the class here. Click save when you're done.
                    </Dialog.Description>
                    <form onSubmit={formik.handleSubmit}>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label
                                className="w-[90px] text-right text-[15px] text-violet11"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8 text-gray-900"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </fieldset>
                        <div className="mt-[25px] flex justify-end">
                            <button type="submit" className="inline-flex h-[35px] items-center justify-center rounded bg-green-700 px-[15px] font-medium leading-none text-green-200 outline-none outline-offset-1 hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-green-200 select-none">
                                Save changes
                            </button>
                        </div>
                    </form>
                    <Dialog.Close asChild>
                        <button
                            className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
            <ToastContainer />
        </Dialog.Root>
    );
};

export default UpdateClass;