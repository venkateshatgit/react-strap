import './App.css'
import {useEffect, useState} from 'react'
import Dashboard from './components/dashboard/dashboard'
import DashboardModal from './components/dashboardModal/dashboardModal'
import HomePage from './components/homepage/homepage'
import Services from './components/services/services'

function App() {
  const [dashboardData, setDashboardData] = useState([])

  useEffect(() => {

    const fetchApi = async () => {
      let response = await fetch('http://localhost:1337/api/stock-apis/')
      let json = await response.json()

      setDashboardData(json.data)
    } 

    fetchApi()
  }, [])
  
  return (
    <div className="App">
      <HomePage/>
      <div className="marginAuto">
        <Services/>
        <div className='trackRecord'>
          <div className='trackContent'>
            <h3>Daily Track Record</h3>
            <p>The daily track record is a record of all the recommendations advised by
               us over the past few years, it includes several data points like date, entry level, stock loss, target,
                booked price, profit, etc..The track record does not include additional costs incurred while trading/investing 
                like Brokerage fee, STT, Short Term Capital Gains, Slippage costs, etc. Customers are advised to factor these costs 
                prior to calculating the past performance.
            </p>
          </div>
          <DashboardModal dashboardData={dashboardData}/>
        </div>
      </div>
    </div>
  );
}

export default App;