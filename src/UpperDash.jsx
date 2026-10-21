import "./UpperDash.css"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import '@fontsource/roboto/700.css';

export default function UpperDash () {
    return (
        <div className="UpperDash">
            <RocketLaunchIcon  sx={{ fontSize: 30, color: "#5B5CE2" }}/>
            <h3 Typography variant="h1" component="h3">Dashboard</h3>
        </div>
    )
}