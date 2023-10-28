import React from 'react'
import lib  from '../img/lib.jpg'
import boo from '../img/book.png'

const Recommended = ({discover}) => {
  return (
    <>
      <div className='mt-2 lg:mt-10 text-white lg:px-5 flex-col md:flex-col sm:flex-col lg:flex-row flex justify-between '>
        <div className='flex lg:w-3/5 w-full px-2 flex-col'>
            <h2 className='font-semibold lg:pt-2 py-2'>Recommended</h2>
            <div className='flex flex-wrap lg:flex-row justify-between items-center h-full gap-3'>
                {discover.slice(0,4).map((book) => (      
                <a key={discover.id} href={book.volumeInfo.previewLink}>
                    <div className="max-w-sm lg:w-40 w-44 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">                 
                    <img className="rounded-t-lg max-h-40 object-cover h-full w-full" src={book.volumeInfo.imageLinks === undefined ? `${boo}` : `${book.volumeInfo.imageLinks.thumbnail}`} alt="" />              
                    <div className="p-3 pt-2">
                        <h5 className="mb-2 text-sm font-bold tracking-tight truncate text-gray-900 dark:text-white">{book.volumeInfo.title}</h5>
                        <p className="mb-3 font-semibold text-xs truncate text-gray-700 dark:text-gray-400">{book.volumeInfo.authors}.</p>
                        <div className='flex justify-between items-center '>
                            <span className='text-xs italic dark:text-white'>{book.volumeInfo.publishedDate.slice(0,4)}</span>
                            <span className='text-xs italic dark:text-white  truncate'>{book.volumeInfo.categories}</span>
                        </div>
                    </div>
                </div>
                </a>
                ))}
            </div>
        </div>
        <div className='flex flex-col  lg:w-1/3 w-full px-2 mt-3'>
            <h2 className='font-semibold flex justify-start pb-1 items-start'>News</h2>      
            <div  className="relative w-full" data-carousel="slide">         
               <img className='rounded-lg ' src={lib} alt="" />
                <div className="absolute bottom-0 rounded-b-lg px-3 py-1 bg-opacity-50 bg-black">
                  <h5 className=" capitalize mb-2 text-xl font-medium leading-tight text-white">
                    Mark Manson
                  </h5>
                  <p className="mb-2 text-base text-white">
                  Mark Manson is an American self-help author and blogger. As of 2022 he has authored or co-authored four books, three of which, The Subtle Art of Not Giving a Fuck, Everything Is F*cked: A Book About Hope, and Will, were The New York Times bestsellers.
                  </p>
                  <p className="text-base text-white">
                    <small className="text-white">Last updated 3 mins ago</small>
                  </p>
              </div>
            </div>
        </div>
      </div>   
    </>
  )
}

export default Recommended