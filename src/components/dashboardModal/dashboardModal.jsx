import {Button, Modal} from '@material-ui/core';
import {useState} from 'react';
import './dashboardModal.css'
import Dashboard from '../dashboard/dashboard';

function DashboardModal({dashboardData}) {

    const [open, setOpen] = useState(false)
    const handleChange = () => setOpen(!open)


    return (  
        <div className="dashboardModal">
            <Button id='modalBtn' onClick={handleChange}>Dashboard</Button>
            <Modal
                open={open}
                onClose={handleChange}
            >
                <Dashboard dashboardData={dashboardData}/>
            </Modal>
        </div>
    );
}

export default DashboardModal;