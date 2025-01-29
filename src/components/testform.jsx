import { useState } from "react";
import { useSelector } from "react-redux";

export default function UploadForm() {
    const userData = useSelector(state => state.user.data)
    const [formData, setFormData] = useState({
        name: "",
        file_type: "PDF",
        size: "",
        faculty_id: "",
        course_id: "",
        classes: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "classes") {
                data.append(key, formData[key].split(","));
            } else {
                data.append(key, formData[key]);
            }
        });

        console.log(data.classes)

        try {
            // console.log(data)
            const token = userData?.token
            const response = await fetch("http://localhost:200000/api/documents/upload", {
                method: "POST",
                body: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const result = await response.json();
            console.log(result);
            alert(result.message);
        } catch (error) {
            console.error("Upload failed", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg space-y-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
            <select name="file_type" value={formData.file_type} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="PDF">PDF</option>
                <option value="DOC">DOC</option>
            </select>
            <input type="number" name="size" placeholder="Size (KB)" value={formData.size} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="faculty_id" placeholder="Faculty ID" value={formData.faculty_id} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="course_id" placeholder="Course ID" value={formData.course_id} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="text" name="classes" placeholder="Classes (comma separated)" value={formData.classes} onChange={handleChange} className="w-full p-2 border rounded" required />
            <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" required />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Upload</button>
        </form>
    );
}
