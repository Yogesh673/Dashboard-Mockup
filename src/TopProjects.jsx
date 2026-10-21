import Projects from "./Projects"
import QuickAction from "./QuickAction"
import "./TopProjects.css"

export default function TopProjects() {
    return (
        <div className="TopProjects">
            <div className="project-inner">
                <Projects />
                <QuickAction />

            </div>


        </div>
    )
}