import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FaPen, FaPlus } from "react-icons/fa";
import { useFormik } from "formik";
import { Dialog } from "radix-ui";
import { Bounce, toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import Loading from "../../../components/loading";
import { getSingleClassFn } from "../../../../redux/slices/classSlices/getSingleClassSlice";
import { getAllFaculties } from "../../../../redux/slices/facultySlice";
import { createClassFn } from "../../../../redux/slices/classSlices/createClassSlice";

const CreateClass = () => {
    const newClassState = useSelector(state => state.newClass);
    const facultiesData = useSelector(state => state.faculty.data);
    const successToastId = 'success-toast';

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllFaculties());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            name: '',
            year: 1,
            faculty: ''
        },
        onSubmit(values) {
            const data = {
                name: values.name,
                year: values.year,
                faculty_id: values.faculty
            };

            dispatch(createClassFn(data));
        },
        validationSchema: yup.object({
            name: yup.string().required("Please enter the name"),
        }),
    });

    useEffect(() => {
        if (newClassState?.error) {
            toast.error(newClassState.error, {
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

        if (newClassState?.data?.isSuccess) {
            toast.success("Created Successfully", {
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
    }, [newClassState.data, newClassState.error]);

    const handleDialogOpen = () => {
    };

    useEffect(() => {
        if (!formik.values.faculty && facultiesData?.faculties?.length) {
            formik.setFieldValue("faculty", facultiesData.faculties[0].id);
        }
    }, [facultiesData]);

    useEffect(() => {
        dispatch(getAllFaculties());
    }, [])

    return (
        <Dialog.Root onOpenChange={handleDialogOpen}>
            <Dialog.Trigger asChild>
                <button className="inline-flex items-center justify-center gap-2 rounded bg-violet4 px-5 py-2 font-medium leading-none text-violet11 outline-none outline-offset-1 focus-visible:outline-2 select-none">
                    <FaPlus /> New Class
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-md focus:outline-none data-[state=open]:animate-contentShow bg-gray-800 text-white">
                    <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
                        Create Class
                    </Dialog.Title>
                    <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
                        Fill in the details below to create a new class.
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
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label
                                className="w-[90px] text-right text-[15px] text-violet11"
                                htmlFor="year"
                            >
                                Year
                            </label>
                            <select className='inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8 text-gray-900' name='year' value={formik.values.year} onChange={(e) => formik.setFieldValue('year', Number(e.target.value))} onBlur={formik.handleBlur}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </fieldset>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label
                                className="w-[90px] text-right text-[15px] text-violet11"
                                htmlFor="faculty"
                            >
                                Faculty
                            </label>
                            <select name="faculty" id="faculty" className='inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8 text-gray-900' value={formik.values.faculty} onChange={formik.handleChange}>{
                                facultiesData?.faculties?.map((faculty, index) => (
                                    <option key={index} value={faculty.id}>{faculty.name}</option>
                                ))
                            }</select>
                        </fieldset>
                        <div className="mt-[25px] flex justify-end">
                            <button disabled={newClassState.isLoading || !formik.isValid} type="submit" className="disabled:bg-gray-500 inline-flex h-[35px] items-center justify-center rounded bg-green-700 px-[15px] font-medium leading-none text-green-200 outline-none outline-offset-1 hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-green-200 select-none">
                                Create Class
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

export default CreateClass;