import ReportList from "../../components/ReportList"
import "./ReportViewPage.css"

const ReportViewPage = () => {
    return (
        <div className="list-container">
            <div className="list-box">
                <h1>Lista de reportes</h1>
                <ReportList />
            </div>
        </div>
    )
}

export default ReportViewPage