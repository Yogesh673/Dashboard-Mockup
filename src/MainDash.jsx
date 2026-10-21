import "./MainDash.css"
import MainUpperDash from "./MainUpperDash"
import NumData from "./NumData"
import NumDataSection from "./NumDataSection"
import TopProjects from "./TopProjects"


export default function MainDash () {
    return (
        <div className="MainDash">
            <MainUpperDash/>
            
            <NumDataSection/>
            <TopProjects/>

            
            
            

        </div>
    )
}