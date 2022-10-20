import { useState } from "react";
// import axios from "axios";
import MainModal from './mainModal';
// import { toast } from "react-toastify";

export default function IntervalModal({ open, setOpen, setClose, request }) {
    const [loading] = useState(false);
    const [options] = useState([{id:1, name:"send request"},{id:2, name:"complain"}, {id:3, name:"other"}]);
    const [channel, setChannel] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [firstPaymentDate, setFirstPaymentDate] = useState("");
    const [amount, setAmount] = useState("");
    const [password, setPassword] = useState("");

    const handleChannel = (e) => setChannel(e.target.value);

 


    const createMandate = async () => {
       const payload = {channel,startDate,endDate,firstPaymentDate,amount,password}
        console.log(payload)
       
       
        // try {
        //     const { data } = await axios.post("https://ccendpoints.herokuapp.com/api/v2/create-interval",
        //         { interval: intervalValue, phone });
        //     if (data.status) {
        //         setLoading(false);
        //         toast.success(data.message);
        //         setTimeout(() => {
        //             setIntervalValue("");
        //             setClose();
        //         }, 6000)
        //     } else {
        //         toast.error("unable to create interval")
        //     }
        // } catch (error) {
        //     let msg = error?.message
        //         ? error.message
        //         : "no or poor internet connection, try it again";
        //     toast.error(msg);
        //     console.log(error);
        // }

    }

    return (
        <MainModal
            open={open}
            setOpen={setOpen}
            setClose={setClose}
            text='Create Mandate'>
            <div className="flex flex-col space-y-4 mt-2">
                <div>
                  <div className="text-sm ml-1 mb-1 font-medium text-slate-700">
                CHANNEL
            </div>
            <select
              onChange={handleChannel}
              className="w-full form-select form-select-sm mb-3 appearance-none block  
                                      px-4 py-2 text-[15px] font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat 
                                      border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 
                                      focus:bg-white focus:border-blue-600 focus:outline-none md:w-full overflow-y-auto"
              aria-label=".form-select-lg example"
            >
              <option defaultValue>select channel</option>
              {options?.map((option, index) => (
                <option
                  key={index}
                  value={option.name}
                >
                  {option.name}
                </option>
              ))}
            </select>
                </div>
                <div>
                    <div className="text-sm ml-1 font-medium mb-2 text-slate-700">
                        START DATE
                    </div>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full mb-3 appearance-none block  px-4 py-2 text-[14px] font-normal 
                                      text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                                      rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                </div>
                 <div>
                    <div className="text-sm ml-1 font-medium mb-2 text-slate-700">
                        END DATE
                    </div>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full mb-3 appearance-none block  px-4 py-2 text-[14px] font-normal 
                                      text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                                      rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                </div>
                 <div>
                    <div className="text-sm ml-1 font-medium mb-2 text-slate-700">
                        FIRST PAYMENT DATE
                    </div>
                    <input
                        type="date"
                        value={firstPaymentDate}
                        onChange={(e) => setFirstPaymentDate(e.target.value)}
                        className="w-full mb-3 appearance-none block  px-4 py-2 text-[14px] font-normal 
                                      text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                                      rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                </div>
                 <div>
                    <div className="text-sm ml-1 font-medium mb-2 text-slate-700">
                        AMOUNT
                    </div>
                    <input
                        type="number" min={1}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full mb-3 appearance-none block  px-4 py-2 text-[14px] font-normal 
                                      text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                                      rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                </div>
                <div>
                    <div className="text-sm ml-1 font-medium mb-2 text-slate-700">
                        PASSWORD
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-3 appearance-none block  px-4 py-2 text-[14px] font-normal 
                                      text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                                      rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                </div>

                <button
                    type="button"
                    className="font-medium text-white hover:text-slate-200 bg-blue-500 rounded-md mt-2 p-2 disabled:opacity-75 
                                    disabled:cursor-not-allowed"
                    disabled={
                         loading ||!channel || !startDate || !endDate|| !firstPaymentDate || !amount || !password
                    }
                    onClick={createMandate}
                >
                    {loading ? 'Creatting...' : 'Create'}
                </button>

            </div>
        </MainModal>
    );
}
