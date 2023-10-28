import React, { useEffect, useRef, useState } from 'react'
import boo from "../img/book.png"
const Navbar = ({value,setSearch, searchDisplay}) => {

    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
          setIsMenuOpen(false)
        }
      }
  
      document.addEventListener("mousedown", checkIfClickedOutside)
  
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [isMenuOpen])
  
  return (  
    <div  className="lg:px-10 px-2 top-0 lg:fixed right-0 w-full z-10 py-2.5 bg-gray-800 flex justify-between text-white  items-center">
        <div className='flex-col flex w-full'>
            <div className='flex justify-between items-center pb-3 lg:pb-1'>
                <div className="text-2xl font-semibold">
                    OOK
                </div>
                <div className="relative w-1/2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <span className=" hidden text-gray-500 sm:text-sm left-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-5"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </span>
                    </div>     
                    <div className='w-full relative'>
                        <input
                            type="text"
                            value={value}
                            onClick={() => setIsMenuOpen((oldState) => !oldState)}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full hidden md:flex lg:flex border-0 py-1.5 px-14 text-gray-900 ring-0 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-0  focus:ring-gray-100 sm:text-sm sm:leading-6"
                            placeholder="Search for books, journal and others"
                        />
                         <div ref={ref}  
                          className={`absolute z-10 ml-1.5 lg:flex  hidden h-72  flex-col w-full `}
                          >
                            {isMenuOpen && searchDisplay.slice(0,5 ).map((book) => (      
                            <a  className='w-full ' href={book.volumeInfo.previewLink}>
                                                    <div
                                class="flex flex-col px-5  bg-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                <img
                                    className="w-10 object-contain h-14 md:h-auto md:!rounded-none md:!rounded-l-lg"
                                    src={book.volumeInfo.imageLinks === undefined ? `${boo}` : `${book.volumeInfo.imageLinks.thumbnail}`}
                                    alt="" />
                                <div class="flex flex-col justify-start py-2 px-5">
                                    <div>
                                        <h5
                                        class="mb-1 text-sm font-semibold text-neutral-800 dark:text-neutral-50">
                                            {book.volumeInfo.title}
                                        </h5>
                                        <p class="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
                                            {book.volumeInfo.authors}&nbsp;&nbsp;&nbsp;
                                        </p>
                                    </div>
                                    <div className='flex gap-10 items-center'>
                                        <p class="text-xs italic text-neutral-500 dark:text-neutral-300">
                                        {book.volumeInfo.publishedDate.slice(0,4)}
                                        </p>
                                        <p class="text-xs italic text-neutral-500 dark:text-neutral-300">
                                        {book.volumeInfo.categories}
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </a>
                            ))}
                         </div>
                    </div>
                </div>
        
                <div className="flex justify-between items-center gap-2">                  
                    <div>
                        <span className="flex justify-between underline items-center">
                        Annette
                        </span>
                    </div>
                    <div className=''>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        />
                        </svg>
                    </div>
                 </div>
            </div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={() => setIsMenuOpen((oldState) => !oldState)}
                    className="w-full lg:hidden md:hidden py-1 px-14 text-gray-900 ring-0 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-0  focus:ring-gray-100 sm:text-sm sm:leading-6"
                    placeholder="Search for books, journal and others"
                />
                <div ref={ref} className='absolute z-10 lg:hidden flex flex-col w-full'>
                          {isMenuOpen && (searchDisplay.slice(0, 5).map((book) => (      
                            <a className=''  key={book.id} href={book.volumeInfo.previewLink}>
                                                    <div
                                class="flex items-center px-4 bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-600 md:max-w-xl md:flex-row">
                                <img
                                    className="w-10 object-contain h-14 md:h-auto md:!rounded-none md:!rounded-l-lg"
                                    src={book.volumeInfo.imageLinks === undefined ? `${boo}` : `${book.volumeInfo.imageLinks.thumbnail}`}
                                    alt="" />
                                <div class="flex flex-col justify-start py-2 px-5">
                                    <div>
                                        <h5
                                        class="mb-1 text-sm font-semibold text-neutral-800 dark:text-neutral-50">
                                            {book.volumeInfo.title}
                                        </h5>
                                        <p class="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
                                            {book.volumeInfo.authors}&nbsp;&nbsp;&nbsp;
                                        </p>
                                    </div>
                                    <div className='flex gap-10 items-center'>
                                        <p class="text-xs italic text-neutral-500 dark:text-neutral-300">
                                        {book.volumeInfo.publishedDate.slice(0,4)}
                                        </p>
                                        <p class="text-xs italic text-neutral-500 dark:text-neutral-300">
                                        {book.volumeInfo.categories}
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </a>
                            )))}
                         </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar