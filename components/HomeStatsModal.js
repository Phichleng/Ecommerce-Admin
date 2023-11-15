import React from "react";
import Link from "next/link";
import { ordersToday , ordersWeek, ordersMonth} from "./HomeStats";


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);



  return (

      

      <div className="modal-2">

      <button
      className="border border-2 border-blue-500 text-black active:bg-blue-400 text-md px-6 py-3 rounded-lg shadow hover:shadow-lg focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setShowModal(true)}
    >
      Sign Up Form
    </button>
        
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex fixed inset-0 z-50"
          >
            <div onClick={() => setShowModal(false)} className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
                {/*header*/}



                <div className="tile1" >
                    <h1>Hello</h1>
                </div>
                
                
              </div>
            </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      
      </div>

  );
}