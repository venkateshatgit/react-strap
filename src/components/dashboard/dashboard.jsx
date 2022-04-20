import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import {useEffect} from 'react'

function Dashboard({dashboardData}) {

    useEffect(() => {
      console.log(dashboardData)
    }, [dashboardData])
    
    return (  
    <div className="dashboard">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Watchlist</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Buy</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">interest</TableCell>
            <TableCell align="right">investment</TableCell>
            <TableCell align="right">target1</TableCell>
            <TableCell align="right">target2</TableCell>
            <TableCell align="right">totalPoint</TableCell>
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