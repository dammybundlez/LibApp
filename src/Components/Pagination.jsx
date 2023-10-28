import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, indexOfLastPost , indexOfFirstPost, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div className="py-6">
                <div className='flex text-teal-100 gap-5 justify-center items-center italic'>
                    {indexOfFirstPost}&nbsp;&nbsp;-&nbsp;&nbsp;
                    {indexOfLastPost}&nbsp;&nbsp;of&nbsp;&nbsp;
                    {totalPosts}
                </div>
            <div className='flex gap justify-center px-5 py-1 items-center rounded-lg '>
                {pageNumbers.map(number => (
                    <a key={number}   href='!#' className='font-bold text-sm '>
                        <div onClick={() => paginate(number)} className='flex justify-between items-center px-6 py-2 bg-gray-400 border-teal-100 border-2'>
                            {number}
                        </div>
                    </a>
                ))}
            </div>   
    </div>
  );
};

export default Pagination;