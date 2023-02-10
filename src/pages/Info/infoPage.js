import Acordion from "../../components/InfoAccordion/QuestionsAccordion"
import "./infoPage.css"


function InfoPage() {
    return (
        <div className="containerBody">
            <div className="containerTittle">
                <h1>
                    Preguntas Frecuentes
                </h1>
            </div>
            <div>
                <Acordion />
            </div>
        </div>
    )
}

export default InfoPage;