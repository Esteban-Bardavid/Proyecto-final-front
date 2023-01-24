import UseAdminProducts from "./useAdminProducts"
import ProductsCard from "../components/Card/productsCard"

function UseProductsMen() {

    const { products } = UseAdminProducts ()

    const response = products.filter((item, i) => (item.publicado > 0 && item.sex == 'H'))

    const mapProductsMen = response.map((item, i) =>
        <ProductsCard
            producto={item.producto}
            imagen={item.imagen}
            precio={item.precio}
            color={item.color}
            categoria={item.categoria}
            tseis={item.tseis}
            tsiete={item.tsiete}
            tocho={item.tocho}
            tnueve={item.tnueve}
            ccero={item.ccero}
            cuno={item.cuno}
            cdos={item.cdos}
            ctres={item.ctres}
            id={item._id}
        />
    )

    const productsMenNike = products.filter((item, i) => (item.publicado > 0 && item.sex == 'H' && item.marca == 'Nike'))

    const mapProductsMenNike = productsMenNike.map((item, i) =>
        <ProductsCard
            key={i}
            indice={i + 1}
            codigo={item.codigo}
            producto={item.producto}
            imagen={item.imagen}
            precio={item.precio}
            talle={item.talle}
            marca={item.marca}
            categoria={item.categoria}
            sex={item.sex}
            id={item._id}
        />
    )


    return {
        mapProductsMen,
        mapProductsMenNike
    }
}

export default UseProductsMen;