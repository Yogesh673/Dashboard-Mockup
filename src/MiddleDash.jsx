import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "./MiddleDash.css"
import '@fontsource/roboto/300.css';

export default function MiddleDash () {
    return (
        <div className="MiddleDash">
            
            <Button variant="contained" startIcon={<DeleteIcon /> } className='Main-button'>Dashboard</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Analytics</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Projects</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Team</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Report</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Message</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Calender</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Setting</Button>
            <Button variant="text" startIcon={<DeleteIcon />}>Profile</Button>
        
      
        </div>
    )
}