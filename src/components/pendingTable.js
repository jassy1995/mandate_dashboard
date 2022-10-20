import React, { useState } from "react";




function PendingTable({ isLoading }) {
 
  const [loading] = useState(false);
  const [locations] = useState([
  {id:1, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:2, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:3, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:4, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:5, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  ]);
 




  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : locations.length === 0 && !isLoading ? (
        <span>No Data found </span>
      ) : (
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-auto">
                <table className="min-w-full table-fixed">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-blue-500 px-2 py-2 border  border-slate-300 text-center"
                      >
                        S/n
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-blue-500 px-2 py-2 text-center border  border-slate-300"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-blue-500 px-2 py-2 text-center border  border-slate-300"
                      >
                        Amount
                      </th>
                       <th
                        scope="col"
                        className="text-sm font-medium text-blue-500 px-2 py-2 text-center border  border-slate-300"
                      >
                        Start Date
                      </th>
                       <th
                        scope="col"
                        className="text-sm font-medium text-blue-500 px-2 py-2 text-center border  border-slate-300"
                      >
                        End Date
                      </th>
                       <th
                        scope="col"
                        className="text-sm font-medium text-blue-500 px-2 py-2 text-center border  border-slate-300"
                      >
                        Link
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {locations.map((request, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300 text-center">
                          {index+ 1}
                        </td>

                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          {request?.name ? request.name : "-"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          {request?.amount ? request.amount : "-"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          {request?.s_date ? request.s_date : "-"}
                        </td>
                         <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          {request?.e_date ? request.e_date : "-"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          {request?.link ? request.link : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )
      } 
    </>
  );
}

export default PendingTable;
