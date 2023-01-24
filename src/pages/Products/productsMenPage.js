import NavBarComponent from "../../components/Navbar/Navbar";
import UseProductsMen from "../../utils/useProductsMen";
import './productsMenPage.css'

function ProductsMen() {

    const { mapProductsMen, mapProductsMenNike } = UseProductsMen();


    return (

        <div>
            <div className="row">
                <div className="Header col-12 ps-3">Soy el Header</div>
            </div>
            <div className="row">
                <div className="Navbar col-12 ps-3"><NavBarComponent/></div>
            </div>
            <div className="row">
                <div className="Men col-12 ps-4 pt-2"><h3><b>HOMBRE</b></h3></div>
            </div>
            <div className="row">

                <div className="filtrarOrdenar col-2">
                    <div className="ms-3 mt-3"><b>FILTRAR/ORDENAR</b></div>
                    <div className="ms-3 mt-3"><b>MARCAS</b></div>
                    <div class="form-check ms-3 mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <b>Adidas</b>
                        </label>
                    </div>
                    <div class="form-check ms-3 mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <b>Nike</b>
                        </label>
                    </div>
                    <div class="form-check ms-3 mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            <b>New Balance</b>
                        </label>
                    </div>
                </div>

                <div className="d-flex justify-content-evenly col-10 flex-wrap">

                    {mapProductsMen}

                    {/* <div className="d-flex">
                        {mapProductsMenNike}
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default ProductsMen;