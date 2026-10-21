import StarIcon from '@mui/icons-material/Star';
import "./LowerDash.css"
import '@fontsource/roboto/300.css';

export default function LowerDash() {
    return (
        <div className="LowerDash">
            <div className="Upgrade">
                <StarIcon sx={{ color: "#ffd900e0" }} fontSize="large" />
                <div className="Upgrade-Content">
                    <p upgrade-first>Upgrade Pro</p>
                    
                    <p className='upgrade-second'>Get more features</p>

                </div>



            </div>
        </div>
    )
}