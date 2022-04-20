import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import {useEffect} from 'react'
import './dashboard.css'

function Dashboard({dashboardData}) {

    useEffect(() => {
      console.log(dashboardData)
    }, [dashboardData])
    
    return (  
    <div className="dashboard">
        <div className="dashboradHeader">
            <h2>Track Record Results</h2>
            <div className="headerInput">
                <input className='dashboardInput'/>
                <input className='dashboardInput'/>
                <input className='dashboardInput'/>
                <button className='dashboardInput'>Get Results</button>
            </div>
        </div>
    
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className='tableHead'>
            <TableRow>
                <TableCell className='tableHeadName'>Watchlist</TableCell>
                <TableCell className='tableHeadName'>Category</TableCell>
                <TableCell className='tableHeadName' align="right">Buy</TableCell>
                <TableCell className='tableHeadName' align="right">Date</TableCell>
                <TableCell className='tableHeadName' align="right">interest</TableCell>
                <TableCell className='tableHeadName' align="right">investment</TableCell>
                <TableCell className='tableHeadName' align="right">target1</TableCell>
                <TableCell className='tableHeadName' align="right">target2</TableCell>
                <TableCell className='tableHeadName' align="right">totalPoint</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {dashboardData.map((item) => (
                    <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{item.attributes.name}</TableCell>
                        <TableCell component="th" scope="row">{item.attributes.category}</TableCell>

                        <TableCell align="right">{item.attributes.buy}</TableCell>
                        <TableCell align="right">{item.attributes.date}</TableCell>
                        <TableCell align="right">{item.attributes.interest}</TableCell>
                        <TableCell align="right">{item.attributes.investment}</TableCell>
                        <TableCell align="right">{item.attributes.target1}</TableCell>
                        <TableCell align="right">{item.attributes.target2}</TableCell>
                        <TableCell align="right">{item.attributes.totalPoint}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
    );
}

export default Dashboard;