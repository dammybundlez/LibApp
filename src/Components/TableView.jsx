import React from 'react'
import book from '../img/book.png'

const TableView = ({table}) => {
   
  return (
    <div>
        <section className="p-6 relative rounded-md overflow-x-auto sm:rounded-lg">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((table) => (
                <tr key={table.id}  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td className="px-6 py-4 w-5  text-gray-900 dark:text-white">
                        <div className='flex gap-2 w-60'>
                            <img className="pr-2 h-10 w-10 object-contain" src={table.volumeInfo.imageLinks === undefined ? `${book}` : `${table.volumeInfo.imageLinks.thumbnail}`} alt="" />
                            <span className="px-6 py-2 truncate font-medium">{table.volumeInfo.title}</span>
                        </div>
                    </td>
                    <td className="px-6 py-2">{table.volumeInfo.authors === '' ? 'loading' : table.volumeInfo.authors }</td>
                    <td className="px-6 py-2">{table.volumeInfo.categories}</td>
                    <td className="px-6 py-2 italic">{table.volumeInfo.publishedDate.slice(0,4)}</td>
                <a className='w-full flex items-center justify-center mt-4 underline' href={table.volumeInfo.previewLink}>
                    <td className="px-6 py-2">{table.accessInfo.pdf.isAvailable === false ? 'not available' : 'available'}</td>
                </a>
                    </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </section>
    </div>
  )
}

export default TableView