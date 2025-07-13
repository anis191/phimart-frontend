// import React from 'react';

const Pagination = ({totalPages, currentPage, handleChange}) => {
    return (
        <div className="flex justify-center mb-5">
            {Array.from({length : totalPages},(_, i) => (
                <button key={i} onClick={()=>handleChange(i+1)} className={`mx-1 px-3 py-1 rounded-sm ${currentPage == i+1 ? "bg-secondary" : "bg-gray-200"}`}>{i + 1}</button>
            ))}
        </div>
    );
};

export default Pagination;