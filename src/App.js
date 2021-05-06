import { useState, useEffect } from 'react'

import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SearchBar } from "./components/SearchBar";

import axios from 'axios'

function App() {

  const [city, setCity] = useState({})
  const [cityToSearch, setCityToSearch] = useState('')
  const [showMain, setShowMain] = useState(false)
  const [history, setHistory] = useState({})

  const handleQuery = async(cityName = cityToSearch) =>{
    var response = await axios.get(`${process.env.REACT_APP_API_URL}api/City/${cityName}`)
    setCity(response.data)
    if(city !== null){
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
        showMain ? <MainContent city={city} history={history} setCityToSearch={setCityToSearch} handleQuery={handleQuery}/> : <h1>Search for the city you want!</h1>
      }
    </div>
  );
}

export default App;
