import React, { useState } from "react";
import { researchData } from "./MockData";

const Content = () => {
  const [tableData, setTableData] = useState(researchData);
  const [order, setOrder] = useState("asc");
  const sortTable = (col) => {
    if (order === "asc") {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setTableData(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...tableData].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setTableData(sorted);
      setOrder("asc");
    }
  };

  return (
    <div>
      <table className="table border-collapse border-t-2 border-l-2 border-r-2 border-black w-full">
        <thead>
          <tr>
            <th className="py-5 hover:bg-[#803636] hover:rounded-sm hover:cursor-pointer w-[30rem]">
              S.no
            </th>
            <th
              className="py-5 hover:bg-[#803636] hover:rounded-sm hover:cursor-pointer w-[30rem]"
              onClick={() => sortTable("uni")}
            >
              University
            </th>
            <th
              className="py-5 hover:bg-[#803636] hover:rounded-sm hover:cursor-pointer w-[30rem]"
              onClick={() => sortTable("title")}
            >
              Title
            </th>
            <th
              className="py-5 hover:bg-[#803636] hover:rounded-sm hover:cursor-pointer w-[30rem]"
              onClick={() => sortTable("tag")}
            >
              Tags
            </th>
            <th className="py-5 hover:bg-[#803636] hover:rounded-sm hover:cursor-pointer w-[30rem]">
              Progress
            </th>
            <th className="py-5 hover:bg-[#803636] hover:rounded-sm hover:cursor-pointer w-[30rem]">
              Date Added
            </th>
            <th className="py-5 hover:bg-[#803636] hover:rounded-sm hover:cursor-pointer w-[30rem]">
              Link
            </th>
          </tr>
        </thead>
        <tbody id="tableData">
          {tableData.map((value, key) => {
            return (
              <tr className="text-center hover:bg-slate-700/50" key={key}>
                <td className="py-4">{tableData.indexOf(value) + 1}</td>
                <td>{value.uni}</td>
                <td>{value.title}</td>
                <td>{value.tag}</td>
                <td>{value.progress}</td>
                <td>{value.dateAdded}</td>
                <td className="text-blue-700 hover:text-black hover:font-semibold hover:cursor-pointer">
                  {value.link}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <p className="flex items-center justify-center ">No Data Available....</p> */}
    </div>
  );
};

export default Content;
