
import { useState } from 'react';

import SearchComponent from '../../components/SearchComponent/SearchComponent';
import ResultComponent from '../../components/ResultComponent/ResultComponent';
import { useNavigate } from 'react-router-dom';

function CelciusPage() {
  const [placel, setPlace] = useState({
    name :"",
    temp : "",
  })

  const navigat = useNavigate()

  const handelClick = () => {
    navigat("/")
  }

  return (
    <div className="CelciusPage">
      <button onClick={handelClick}>Back Page</button>
      <SearchComponent setPlace={setPlace} />
      <ResultComponent place={placel} celcius = {true}/>
    </div>
  );
}

export default CelciusPage;
