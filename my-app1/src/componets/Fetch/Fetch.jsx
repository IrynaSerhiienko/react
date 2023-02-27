import useFetch from "react-fetch-hook";
import Item from './Item/Item';
// import { useState, useEffect } from 'react';
import s from './Fetch.module.css';

function Fetch() {
     const {data} = useFetch('https://rickandmortyapi.com/api/character/?name=morty&status=alive');
    // const {data} = useFetch('https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive');
    // const {data} = useFetch('https://rickandmortyapi.com/api/character?page=2');
    
    console.log(data?.results);
    
    if (!data) {
      return <div>Loading...</div>;
    }

    // const humans = data?.results.filter(item => item.species === "Human");
    
    const newRick = data?.results.map((item) => <Item key={item.id} item={item} />);
    
    return (
        <div  className={s.cards}>
            {newRick}
        </div>
    );

  }

  export default Fetch;


   
    // return <div>{newRick}</div>;
        //       <li key={item.id}>{item.name} - {item.species}</li>
        //     ))}
    // return (
    //   <ol>
    //     {humans?.map((item) => (
    //       <li key={item.id}>{item.name} - {item.species}</li>
    //     ))}
    //   </ol> 
    // );

  // const Fetch = () => {
//     const { data } = useFetch("https://rickandmortyapi.com/api/character?page=2");
//     console.log(data?.results);
//     const newRick = data?.results.map((item) => <Item item={item} />);
  
//     return <div>{newRick}</div>;
//     return <div>{Fetch}</div>;
// }

// export default Fetch;