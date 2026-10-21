import "./InnerProject.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function InnerProject() {
    return (
        <div className="inner-project">
            {/* <div className="inner-project-content"> */}
                <div className="project-heading">
                    <h4>E-commerce Platform</h4>
                    <p>In Progress</p>
                </div>

                <div className="slide">
                    <Box sx={{ width: 450 }}>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={30}
                            // getAriaValueText={valuetext}
                            color="secondary"
                        />
                    </Box>
                </div>

            {/* </div> */}
        </div>
    )
}