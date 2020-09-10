import React from 'react';
import './paginations.scss';

export default function Paginations({postsPerPage,totalPost,paginate}) {
    const pageNumbers = [];

    for(let i = 1;i < Math.ceil(totalPost / postsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div className='paginations'>
      <ul>
      {pageNumbers.map((number) => (<li key={number}><button onClick={()=>  paginate(number)}>{number}</button></li>))}
      </ul>
    </div>
  );
}
