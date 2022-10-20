import { useState, useContext } from "react";
// import { Store } from "../store";
import MainModal from './mainModal';

export default function FilterLocationModal({ open, setOpen, setClose }) {
  // const { state, dispatch } = useContext(Store);
  // const { phones } = state;
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [period, inputProps, clearInput] = useRadioButtons("")


  const handleStartDateUpdate = (e) => setStartDateValue(e.target.value);
  const handleEndDateUpdate = (e) => setEndDateValue(e.target.value);
  const handleSelectedPhone = (e) => setPhone(e.target.value);
  const handleSelectedPhone2 = (e) => setPhone2(e.target.value);
  const fetchFilter = () => {
    // dispatch({ type: "RESET_SEARCH_PARAM_2" });
    // dispatch({ type: "RESET_SEARCH_PARAM" });
    // dispatch({
    //   type: "UPDATE_SEARCH_PARAM",
    //   payload: {
    //     phone: phone,
    //     start_time: startDateValue?.concat(":00"),
    //     end_time: endDateValue?.concat(":00"),
    //   },
    // });
    // setStartDateValue("");
    // setEndDateValue("");
    // setPhone("");
    // setClose();
  };

  const fetchPeriod = () => {
    // dispatch({ type: "RESET_SEARCH_PARAM" });
    // dispatch({ type: "RESET_SEARCH_PARAM_2" });
    // dispatch({
    //   type: "UPDATE_SEARCH_PARAM_2",
    //   payload: {
    //     phone2,
    //     period
    //   },
    // });
    // clearInput()
    // setPhone2("");
    // setClose();
  };

  function useRadioButtons(name) {
    const [period, setState] = useState(null);

    const clearInput = () => {
      setState(null)
    }

    const handleChange = e => {
      setState(e.target.value);
    };

    const inputProps = {
      name,
      type: "radio",
      onChange: handleChange
    };

    return [period, inputProps, clearInput];
  }


  return (
    <MainModal
      open={open}
      setOpen={setOpen}
      setClose={setClose}
      text='Filter Your Location Here'>
      <div className="flex flex-col space-y-1">
        <div className="text-md ml-1 font-medium">
          Phone Number
        </div>
        <select
          onChange={handleSelectedPhone}
          className="w-full form-select form-select-sm mb-3 appearance-none block  
                                      px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid 
                                      border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none md:w-full overflow-y-auto"
          aria-label=".form-select-lg example"
        >
          <option defaultValue>select ...</option>
          {/* {phones?.map((phone, index) => (
            <option
              key={index}
              value={phone.phoneNumber}
            >
              {phone.phoneNumber}
            </option>
          ))} */}
        </select>
      </div>
      <div className="flex flex-col space-y-4 mt-6">
        <div>
          <div className="text-md ml-1 font-medium mb-1">
            Start Time
          </div>
          <input
            type="time"
            onChange={(e) => handleStartDateUpdate(e)}
            className="w-full mb-3 appearance-none block  px-4 py-2 text-xl font-normal 
                                      text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 
                                      rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          ></input>
        </div>
        <div>
          <div className="text-md ml-1 font-medium mb-1">
            End Time
          </div>
          <input
            type="time"
            onChange={(e) => handleEndDateUpdate(e)}
            className="w-full mb-3 appearance-none block  px-4 py-2 text-xl font-normal text-gray-700 
                                      bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition 
                                      ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          ></input>
        </div>
        <button
          type="button"
          className="font-medium text-white hover:text-slate-200 bg-myColor rounded-md mt-2 p-2 disabled:opacity-75 
                                    disabled:cursor-not-allowed"
          disabled={
            !endDateValue || !startDateValue || !phone
          }
          onClick={fetchFilter}
        >
          search
        </button>
      </div>
      <div className="mt-8 border-t-2 pt-5">
        <div className="flex flex-col space-y-4 ">

          <div className="">
            <div className="text-md ml-1 mb-1 font-medium">
              Phone Number
            </div>
            <select
              onChange={handleSelectedPhone2}
              className="w-full form-select form-select-sm mb-3 appearance-none block  
                                      px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat 
                                      border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 
                                      focus:bg-white focus:border-blue-600 focus:outline-none md:w-full overflow-y-auto"
              aria-label=".form-select-lg example"
            >
              <option defaultValue>select ...</option>
              {/* {phones?.map((phone, index) => (
                <option
                  key={index}
                  value={phone.phoneNumber}
                >
                  {phone.phoneNumber}
                </option>
              ))} */}
            </select>
          </div>
          <div className="flex justify-between">
            <div className="flex space-x-3 items-center">
              <input
                type="radio"
                value="morning"
                checked={period === "morning"}

                {...inputProps}
                className=" h-5 w-5"
              />
              <div className="text-xl ml-1 font-medium text-slate-600">
                Morning
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <input
                type="radio"
                value="afternoon"
                checked={period === "afternoon"}
                {...inputProps}

                className="w-5 h-5"
              />
              <div className="text-xl ml-1 font-medium text-slate-600">
                Afternoon
              </div>
            </div>
          </div>
          <div className="flex gap-[180px]">
            <div className="flex space-x-3 items-center">
              <input
                type="radio"
                value="night"
                checked={period === "night"}
                {...inputProps}
                className=" h-5 w-5"
              />
              <div className="text-xl ml-1 font-medium text-slate-600">
                Night
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <input
                type="radio"
                value="all"
                checked={period === "all"}
                {...inputProps}
                className=" h-5 w-5"
              />
              <div className="text-xl ml-1 font-medium text-slate-600">
                All
              </div>
            </div>

          </div>
          <div className="flex  items-end">
            <button
              type="button"
              className="w-full md:w-[50%] font-medium text-white hover:text-slate-200 bg-myColor rounded-md mt-2 p-2 
                                        disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={fetchPeriod}
              disabled={!phone2 && !period}
            >
              search
            </button>

          </div>

        </div>
      </div>
    </MainModal>
  );
}
