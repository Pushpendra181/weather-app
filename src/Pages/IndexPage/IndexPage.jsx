
import { useState } from 'react';
import './IndexPage.css';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import ResultComponent from '../../components/ResultComponent/ResultComponent';
import { useNavigate } from 'react-router-dom';

function IndexPage() {
  const [placel, setPlace] = useState({
    name :"",
    temp : "",
  })

  const navigat = useNavigate()

  const handelClick = () => {
    navigat("/celcius")
  }

  return (
    <div className="IndexPage">
      <button onClick={handelClick}>Celcus Page</button>
      <SearchComponent setPlace={setPlace} />
      <ResultComponent place={placel}/>
    </div>
  );
}

export default IndexPage;
