import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io';
import _ from "lodash";


export default function Pagination({items, pageSize, currentPage, onPageChange}) {


    const pageCount = items / pageSize;
    if(Math.ceil(pageCount) ===1 ) return null;
    const pages = _.range(1, pageCount +1);


  return (



    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <IoIosArrowBack className="h-5 w-5" aria-hidden="true" />
            </a>


        {pages.map((page) => (


            <li key={page} className={page === currentPage ? "page-item  bg-indigo-600 list-none" : "page-item list-none"}>
                <a style={{ cursor: "pointer" }} onClick={() => onPageChange(page)}
                className="page-link relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    {page}
                </a>
            </li>
           
        ))}

            

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <IoIosArrowForward className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
