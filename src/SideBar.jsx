import MiddleDash from "./MiddleDash"
import "./SideBar.css"
import UpperDash from "./UpperDash"
import LowerDash from "./LowerDash"

export default function SideBar () {
    return (
        <div className="SideBar">
            <UpperDash/>
            <MiddleDash/>
            <LowerDash/>
            
            
        </div>
    )
}