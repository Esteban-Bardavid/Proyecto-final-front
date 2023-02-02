import Accordion from 'react-bootstrap/Accordion';
import "./QuestionsAccordion.css"

function Acorrdion() {
    return (
        <div>
            <div className='containerAcorrdion '>
                <Accordion d-flex justify-content-center defaultActiveKey={['0']} alwaysOpen>

                    <Accordion.Item className='bodyAcorrdion w-50' eventKey="0">

                        <Accordion.Header >Cuanto tardara en llegar mi pedido?</Accordion.Header>
                        <Accordion.Body >
                            Lorem

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item className='bodyAcorrdion w-50' eventKey="1">

                        <Accordion.Header >Accordion Item #2</Accordion.Header>
                        <Accordion.Body >
                            Lorem

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='bodyAcorrdion w-50' eventKey="3">

                        <Accordion.Header >Accordion Item #3</Accordion.Header>
                        <Accordion.Body >
                            Lorem

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='bodyAcorrdion w-50' eventKey="4">

                        <Accordion.Header >Accordion Item #4</Accordion.Header>
                        <Accordion.Body >
                            Lorem

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='bodyAcorrdion w-50' eventKey="5">

                        <Accordion.Header >Accordion Item #5</Accordion.Header>
                        <Accordion.Body>
                            Lorem

                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    )
}

export default Acorrdion;