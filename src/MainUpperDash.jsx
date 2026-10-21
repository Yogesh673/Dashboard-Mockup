import "./MainUpperDash.css"
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';

export default function MainUpperDash() {
    return (
        <div className="MainUpperDash">
            <div className="inner-div">
                <div className="UpperDashContent">
                    <h2>Dashboard</h2>
                    <p>Welcome back! Here's what's happening today.</p>
                </div>


                <div className="bell">
                    <div className="bell-content">
                        <div className="icon-but">
                            <IconButton sx={{ color: "#ffd900e0" }}>
                                <Badge color="secondary" badgeContent={4}>
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </div>

                        <div className="search-icon">
                            <SearchIcon sx={{ color: "#f2f1eee0" }} />
                        </div>

                    </div>


                    <div className="user">
                        <div className="admin-letter">
                            <h5>YV</h5>
                        </div>
                        <div className="user-name">
                            <h5>Yogesh Verma</h5>
                            <p>admin</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}