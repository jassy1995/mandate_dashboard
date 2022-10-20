import React, {  useState } from "react";
import {formatCurrency} from "lib/utils"
import FormModal from "components/formModal";


function NomandateTable() {
  
  const [open, setOpen] = useState(false);
  const [loading] = useState(false);
  const [request, setRequest] = useState(null);
  const [requests] = useState([
  {id:1, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:2, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:3, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:4, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  {id:5, name:'Adeniran James', amount:'200000',s_date:"02-10-2020",e_date:"10-10-2020",link:'https://clan.com'},
  ]);

  const closeModal = () => {
    setOpen(false);
  };

  const setRequestDetail = (request) => {
    setRequest(request);
    setOpen(true);
  }


  return (
    <>
       <FormModal request={request} setClose={closeModal} open={open} setOpen={setOpen} /> 
      {loading ? (
        // <DisplayInfo children="Loading..." />
        <span>fjfk</span>
      ) : requests.length === 0 && !loading ? (
        // <DisplayInfo children="No Data found " />
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
                      <th
                        scope="col"
                        className="text-sm font-medium text-blue-500 px-2 py-2 text-center border  border-slate-300"
                      >
                        Create Mandate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border border-slate-300 text-center">
                          {index+ 1}
                        </td>

                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          {request?.name ? request.name : "-"}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          {request?.amount ? formatCurrency(request.amount) : "-"}
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
                        <td className="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap border border-slate-300 text-center">
                          <button onClick={() => setRequestDetail(request)} className="bg-yellow-100 px-2 py-1 text-yellow-700 text-sm font-medium rounded-full">create mandate</button>
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

export default NomandateTable;
