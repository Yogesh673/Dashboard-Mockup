import "./QuickAction.css"
import QuickSection from "./QuickSection"
import '@fontsource/roboto/300.css';


export default function QuickAction() {
    return (
        <div className="Quick-action">
            <h3>Quick Actions</h3>
            <div className="grid">
                <QuickSection />
                <QuickSection />
                <QuickSection />
                <QuickSection />
            </div>
        </div>
    )
}