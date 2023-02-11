import Acordion from "../../components/InfoAccordion/QuestionsAccordion"
import "./infoPage.css"


function InfoPage() {
    return (
        <div >


            <div >
                <h1 className="Titulo">Preguntas Frecuentes</h1>
                <div className="categorias" id="categorias" >
                    <div className="categorias" data-categoria="metedos-pago" >
                        
                    </div>
                </div>
            </div>



            <div>
                <Acordion />
            </div>

        </div>
    )
}

export default InfoPage;