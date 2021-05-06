import { useState, useEffect } from 'react'

import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SearchBar } from "./components/SearchBar";

import axios from 'axios'
import { Message } from './components/Message';

function App() {

  const [city, setCity] = useState({})
  const [cityToSearch, setCityToSearch] = useState('')
  const [showMain, setShowMain] = useState(false)
  const [history, setHistory] = useState({});
  const [errorMessage, setErrorMessage] = useState({
    good: true,
    message: 'You haven\'t searched for a city, try writing the name in the searchbar'
  });

  const handleQuery = async(cityName = cityToSearch) =>{
    var response = await axios.get(`${process.env.REACT_APP_API_URL}api/City/${cityName}`)
    setCity(response.data)
    if(!response.data.sucess){
      setShowMain(false)
      setErrorMessage({
        good: false,
        message: 'I haven\'t found the city you are looking for, try again'
      })
    } 
    else{
      setShowMain(true)
    }
  }

  const getHistory = async() =>{
    var response = await axios.get(`${process.env.REACT_APP_API_URL}api/SearchHistory/GetHistory`)
    setHistory(response.data.data)
  }

  useEffect(() => {
    getHistory();
  }, [city])

  return (
    <div className="App">
      <Header />
      <SearchBar setCityToSearch={setCityToSearch} cityToSearch={cityToSearch} handleQuery={handleQuery}/>
      {
        showMain ? 
          <MainContent city={city} history={history} setCityToSearch={setCityToSearch} handleQuery={handleQuery}/> 
          : <Message message={errorMessage} />
      }
    </div>
  );
}

export default App;
