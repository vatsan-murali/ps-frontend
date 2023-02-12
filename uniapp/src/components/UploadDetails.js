import React, { useState } from "react";
import * as XLSX from "xlsx";

const UploadDetails = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel",
  ];

  const handleFile = (e) => {
    const file = e.target.files[0];
    console.log(file.type)
    if (file) {
      if (fileType.includes(file.type)) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError('Please Select only Excel File')
        setExcelFile(null)
      }
    } else {
      setExcelFileError("Please Select a File");
      setExcelFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const worksheetJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setExcelData(worksheetJson);
    } else {
      setExcelFileError("Please Select a File");
      setExcelData(null);
    }
  };
  console.log(excelData);

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="mt-[2rem]">
        <label className="block font-semibold text-black-900">
          Upload Excel File
        </label>
        <input
          type="file"
          className="block my-3 p-2 w-[34rem] text-pink-900 border border-blue-300 rounded-lg cursor-pointer bg-white"
          onChange={handleFile}
        ></input>
        {excelFileError && (
          <h1 className="text-red-700 my-4">{excelFileError}</h1>
        )}
        <button
          type="submit"
          className="bg-white px-3 py-1 rounded-md hover:text-white hover:bg-black block mb-[5rem]"
        >
          Submit
        </button>
        <div>
          {excelData === null && (
            <h2 className="flex justify-center">No File Selected</h2>
          )}
          {excelData !== null && (
            <div>
              <table>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  {excelData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      {row.map((ele, eleIndex) => (
                        <th
                          key={eleIndex}
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {ele}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default UploadDetails;


// import React, { useState } from "react";
// import * as XLSX from "xlsx";

// const UploadDetails = () => {
//   const [excelFile, setExcelFile] = useState(null);
//   const [excelData, setExcelData] = useState(null);
//   const [excelFileError, setExcelFileError] = useState(null);
//   const fileType = [
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     "application/vnd.ms-excel",
//   ];

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     console.log(file.type);
//     if (file) {
//       if (fileType.includes(file.type)) {
//         const reader = new FileReader();
//         reader.readAsArrayBuffer(file);
//         reader.onload = (e) => {
//           setExcelFileError(null);
//           setExcelFile(e.target.result);
//         };
//       } else {
//         setExcelFileError("Please Select only Excel File");
//         setExcelFile(null);
//       }
//     } else {
//       setExcelFileError("Please Select a File");
//       setExcelFile(null);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (excelFile) {
//       const workbook = XLSX.read(excelFile, { type: "buffer" });
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const worksheetJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//       setExcelData(worksheetJson);
//     } else {
//       setExcelFileError("Please Select a File");
//       setExcelData(null);
//     }
//   };

//   return (
//     <div className="mt-[15vh] ml-[3vh]">
//       <p className="font-semibold text-lg mb-4">
//         Upload Excel file from your computer
//       </p>
//       <form onSubmit={handleSubmit}>
//         <div className=" border-gray-700 border-2 border-dotted w-[70vw] h-[70vh] flex justify-center items-center">
//           <input
//             onChange={handleFile}
//             type="file"
//             className=" rounded-l-md py-2 pl-2 pr-[30%] text-center rounded-r-md border-2 border-black "
//             placeholder="No file chosen..."
//           ></input>
//           {excelFileError && (
//             <h1 className="text-red-700 my-4">{excelFileError}</h1>
//           )}
//           <button
//             type="submit"
//             className="bg-white px-3 py-1 rounded-md hover:text-white hover:bg-black block mb-[5rem]"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UploadDetails;
