import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import NewsSourceCard from '../../components/newsSourceCard/NewsSourceCard';

const Home = () => {
const [newsSource, setNewsSource]=useState([])
const [isShowSpinner, setIsShowSpinner]=useState(true)
const[errorMsg, setErrorMsg]=useState('')
const [filteredSource,setFilteredSource]=useState([])

useEffect(() => {
console.log('hello')

fetch(
  "https://newsapi.org/v2/top-headlines/sources?apiKey=6ef33175ea344ae9a50694cda7551c4c"
)
  .then((res) => res.json())
  .then((data) =>{ setNewsSource(data.sources)
    setFilteredSource(data.sources)
setIsShowSpinner(false)
setErrorMsg('')

}).catch(err=>{

setIsShowSpinner(false)
setErrorMsg('Sorry , something went wrong')

}
    
    
    )

    // return () => {
    //     cleanup
    // }
}, [])


const [catagoryValue,setCatagoryValue]=useState('general')
const handleSelect=(e)=>{
setCatagoryValue(e.target.value)

let s=newsSource.filter(n=>n.category===e.target.value)

setFilteredSource(s);

}


    return (
      <div class="w-100">
        <Header />
        <h1 class="mb-4 text-center">
          {" "}
          All the sources from where you are getting the news ...
        </h1>
        {/* select */}
        <div class='p-2 text-center'> Filter by category </div>
        <div class="p-4 m-3">
          <select
            value={catagoryValue}
            class="form-select "
            aria-label="Default select example"
            onChange={handleSelect}
          >
            <option selected>Open this select menu</option>
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
          </select>
        </div>
        {/* select section  */}
        {isShowSpinner && (
          <div class="d-flex justify-content-center align-items-center">
            <div class="spinner-border  " role="status">
              <span class="visually-hidden ">Loading...</span>
            </div>
          </div>
        )}
        {errorMsg && (
          <h1 class="text-center bg-danger p-4 m-4"> {errorMsg} </h1>
        )}
       <div class="container"> <div class="row row-cols-1 row-cols-md-3 g-4 w-100 ">
          {filteredSource?.map((news, i) => (
            <NewsSourceCard info={news} key={i} />
          ))}
        </div> </div>
      </div>
    );
};

export default Home;