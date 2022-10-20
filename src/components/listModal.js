// import { useContext,useState } from "react";
// import { Store } from "../store";
// import DisplayInfo from "./empty";
// import { timeFormatter } from "../util/timeFormatter";
import MainModal from 'components/mainModal';

export default function ListModal({ open, setOpen, setClose }) {
  // const { state } = useContext(Store);
  // const { loading, listPhone } = state;

  // const [loading, setLoading] = useState(false)
  // const [listPhone, setListPhone] = useState([])
  return (
    <MainModal
      open={open}
      setOpen={setOpen}
      setClose={setClose}
      text="Uninstall Phone List"
    >
      {/* <div className="flex flex-col space-y-1">
        {loading ? (
          <DisplayInfo children="Loading..." />
        ) : listPhone.length === 0 && !loading ? (
          <DisplayInfo children="Empty." />
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full table-fixed">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-blue-500 px-6 py-4 text-center border  border-slate-300"
                  >
                    s/n
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-blue-500 px-6 py-4 text-center border  border-slate-300"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-blue-500 px-6 py-4 text-center border  border-slate-300"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {listPhone.map((request, index) => (
                  <tr
                    key={index}
                    className="border-b"
                  >
                    <td className="px-3 py-2 whitespace-nowrap text-sm  text-gray-900 border border-slate-300 text-center">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border border-slate-300 text-center">
                      {request?.phone}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border border-slate-300 text-center">
                      <span className="border-r- border-slate-600 pr-1">
                        {
                          request?.time_created?.split(
                            " "
                          )[0]
                        }
                      </span>{" "}
                      <span className="pl-1 font-mono font-bold">
                        {request?.time_created &&
                          timeFormatter(
                            new Date(
                              request.time_created
                            )
                          )}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div> */}
      <div className="flex flex-col space-y-1">
          <div className="overflow-auto">
            <table className="min-w-full table-fixed">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-blue-500 px-6 py-4 text-center border  border-slate-300"
                  >
                    s/n
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-blue-500 px-6 py-4 text-center border  border-slate-300"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-blue-500 px-6 py-4 text-center border  border-slate-300"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                    className="border-b"
                  >
                   <td className="px-3 py-2 whitespace-nowrap text-sm  text-gray-900 border border-slate-300 text-center">
                      1
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm  text-gray-900 border border-slate-300 text-center">
                      phone
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm  text-gray-900 border border-slate-300 text-center">
                      date
                    </td>
                  </tr>


                {/* {listPhone.map((request, index) => (
                  <tr
                    key={index}
                    className="border-b"
                  >
                    <td className="px-3 py-2 whitespace-nowrap text-sm  text-gray-900 border border-slate-300 text-center">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border border-slate-300 text-center">
                      {request?.phone}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap border border-slate-300 text-center">
                      <span className="border-r- border-slate-600 pr-1">
                        {
                          request?.time_created?.split(
                            " "
                          )[0]
                        }
                      </span>{" "}
                      <span className="pl-1 font-mono font-bold">
                        {request?.time_created &&
                          timeFormatter(
                            new Date(
                              request.time_created
                            )
                          )}
                      </span>
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
      </div>
    </MainModal>
  )
}
