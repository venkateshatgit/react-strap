import './App.css'
import {useEffect, useState} from 'react'
import Dashboard from './components/dashboard/dashboard'

function App() {
  const [dashboardData, setDashboardData] = useState([])

  useEffect(() => {

    const fetchApi = async () => {
      let response = await fetch('http://localhost:1337/api/stock-apis/')
      let json = await response.json()

      setDashboardData(json.data)
    } 

    fetchApi()
    console.log(dashboardData)
  }, [])
  
  return (
    <div className="App">
      <Dashboard dashboardData={dashboardData}/>
    </div>
  );
}

export default App;