import React, { useEffect, useState } from 'react';
import faculties from '../data/faculties';
import Back from '../components/back';

const UploadPage = () => {
  const [docName, setDocsName] = useState('')
  const [selectedFaculty, setSelectedFaculty] = useState(faculties[0]?.name || "");
  const [selectedYear, setSelectedYear] = useState("fresh");
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState('Click to Upload File')

  const currentFaculty = faculties.find(faculty => faculty.name === selectedFaculty);
  const availableYears = currentFaculty?.classes.map(classGroup => classGroup.year) || [];
  const availableClasses =
    currentFaculty?.classes.find(classGroup => classGroup.year === selectedYear)?.classes || [];

  const userData = JSON.parse(localStorage.getItem('userData'))

  useEffect(() => {
    if (!userData) {
      navigate('studentdocs/auth/login')
    }
  }, [userData])

  const handleFileChange = (e) => {
    console.log(e.target)
    const files = e.target.files;

    if (files && files.length > 0) {
      setSelectedFileName('Uploading...')
      setSelectedFileName(files[0].name)
    } else {
      setSelectedFileName('Click to Upload File')
    }
  }

  const uploadHandler = () => {
    console.log(`name: ${docName}, faculty: ${selectedFaculty}, year: ${selectedYear}, classes: ${selectedClass}, file: ${selectedFileName}`)
  }

  return (
    <div className='w-[80%] md:w-[500px] mx-auto my-10 flex flex-col gap-6'>
      <Back to={'/studentdocs/dashboard'} />
      <div className='info-section bg-white shadow-md rounded-lg flex flex-col'>
        <div className="top-part bg-blue-700 text-white font-semibold font-konit text-center text-2xl py-3 rounded-tl-lg rounded-tr-lg">Upload</div>
        <form action="" className='grid grid-cols-1 px-4 py-4'>
          {/* Document Name */}
          <label htmlFor="doc-name">Document name<span className='text-red-500 font-bold text-lg'>*</span></label>
          <input type="text" id='doc-name' className='bg-gray-200 rounded-md px-3 py-2 outline-none' onChange={(e) => setDocsName(e.target.value)} />

          {/* Description */}
          <label htmlFor="doc-desc" className='mt-2'>Description (optional)</label>
          <input type="text" id='doc-desc' className='bg-gray-200 rounded-md px-3 py-2 outline-none' />

          {/* Faculty Selection */}
          <label htmlFor="doc-faculty" className='mt-2'>Faculty<span className='text-red-500 font-bold text-lg'>*</span></label>
          <select className='bg-gray-200 rounded-md px-3 py-2 outline-none w-full' value={selectedFaculty} onChange={(e) => {
            const newFaculty = e.target.value;
            setSelectedFaculty(newFaculty);
            const newFacultyData = faculties.find(faculty => faculty.name === newFaculty);
            const newYears = newFacultyData?.classes.map(classGroup => classGroup.year) || [];
            setSelectedYear(newYears.includes("fresh") ? "fresh" : newYears[0] || "");
            setSelectedClass([]);
          }}>
            {faculties.map((faculty, index) => (
              <option key={index} value={faculty.name}>{faculty.name}</option>
            ))}
          </select>

          {/* Year Selection */}
          <label htmlFor="doc-year" className='mt-2'>Year<span className='text-red-500 font-bold text-lg'>*</span></label>
          <select className='bg-gray-200 rounded-md px-3 py-2 outline-none w-full' value={selectedYear} onChange={(e) => {
            setSelectedYear(e.target.value);
            setSelectedClass([]);
          }} disabled={availableYears.length === 0}>
            {availableYears.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>

          {/* Class Selection */}
          <label htmlFor="doc-class" className='mt-2'>Class<span className='text-red-500 font-bold text-lg'>*</span></label>
          <div className='text-lg'>
            {availableClasses.length > 0 ? (
              availableClasses.map((className, index) => (
                <label key={index} className="block">
                  <input
                    type="checkbox"
                    className='w-4 h-4 mr-1 border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-150 ease-in-out'
                    value={className}
                    checked={selectedClass.includes(className)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSelectedClass(prev =>
                        checked ? [...prev, className] : prev.filter(c => c !== className)
                      );
                    }}
                  />
                  {className}
                </label>
              ))
            ) : (
              <p className="text-gray-500">Select a year first</p>
            )}
          </div>
        </form>
      </div>
      <div className="flex-1 bg-white shadow-md p-4 rounded-lg flex flex-col gap-4 items-center">
        <h2 className="text-lg font-semibold">Upload File</h2>
        <label className="cursor-pointer p-4 border-dashed border-2 border-blue-500 rounded-lg w-full text-center">
          <input type="file" className="hidden" onChange={handleFileChange} />
          📁 {selectedFileName}
        </label>
      </div>
      <button className="bg-blue-600 hover:bg-blue-800 transition text-white p-2 rounded" onClick={uploadHandler}>Upload</button>
    </div >
  );
};

export default UploadPage;
