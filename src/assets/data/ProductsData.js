const products = [
    {
        id: "01",
        productName: "Nike 1 ",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe4606d11/products/NI_DC9437-100/NI_DC9437-100-1.JPG",
        genero: "Mujer",
        category: "Running",
        marca:"Nike",
        price: '19.300',
        colors: '2',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    },
    {
        id: "02",
        productName: "Adidas Adizero Rc 4",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw718afea1/products/AD_GX8156/AD_GX8156-1.JPG",
        genero: "Mujer",
        category: "Running",
        marca:'Adidas',
        price: '34.999',
        colors: '2',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    },
    {
        id: "03",
        productName: "Adidas Duramo 10",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw57723ade/products/AD_GW4116/AD_GW4116-1.JPG",
        genero: "Mujer",
        category: "Running",
        marca:'Adidas',
        price: '19.300',
        colors: '2',
        description:
            "Las Zapatillas adidas Duramo 10 presentan un diseño moderno y urbano, ideal para los runners que aman la moda. Su exterior de malla aporta transpirabilidad y resistencia, mientras que la suela de caucho aporta tracción en diversas superficies. La amortiguación LIGHTMOTION mejora tus pasos y te brinda la comodidad que necesitas para superar todas tus marcas.",
    },
    {
        id: "03",
        productName: "Adidas Eq21 Run",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb194103e/products/AD_GW6720/AD_GW6720-1.JPG",
        genero: "Mujer",
        category: "Running",
        price: '25.999',
        colors: '2',
        description:
            "Las Zapatillas adidas Eq21 Run están diseñadas para los corredores más exigentes. La malla transpirable de la capellada favorece la ventilación y te ayuda a sumar más kilómetros todos los días con una comodidad superior. Su amortiguación ligera ayuda a mejorar todos tus pasos y la suela de goma aporta mayor tracción. Para mantener la estabilidad y evitar accidentes cuentan con estabilizadores de TPU en el talón y el lateral. El estilo te permite combinarlas con todo y hasta usarlas en tu día a día.",
    },
    {
        id: "04",
        productName: "Fila Street Fit ",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe9309fd1/products/FI_F02AT018-5090/FI_F02AT018-5090-1.JPG",
        genero: "Mujer",
        category: "Trainning",
        marca:"Fila",
        price: '16.900',
        colors: '2',
        description:
            "Conocé las Zapatillas Fila Street Fit, diseñadas para los amantes de la moda en el gym, con una capellada en un mix de materiales de alta calidad y con un estilo único y a la vez propio de Fila. Lucí un look urbano y el outfit que quieras con este calzado elaborado para tus entrenamientos fácil de combinar con todas tus prendas.",
    },
    {
        id: "05",
        productName: "Adidas Adilette Aqua",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd53c3081/products/AD_GX4277/AD_GX4277-1.JPG",
        genero: "Mujer",
        category: "Ojotas",
        marca:'Adias',
        price: '10.999',
        colors: '2',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    },
    {
        id: "01",
        productName: "nIKE 1 ",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe4606d11/products/NI_DC9437-100/NI_DC9437-100-1.JPG",
        genero: "Mujer",
        category: "Running",
        price: '19.300',
        colors: '2',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    },
    {
        id: "01",
        productName: "Zapatilla 1 ",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe4606d11/products/NI_DC9437-100/NI_DC9437-100-1.JPG",
        genero: "Mujer",
        category: "Running",
        price: '19.300',
        colors: '2',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    },
    {
        id: "01",
        productName: "Zapatilla 1 ",
        imgUrl: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe4606d11/products/NI_DC9437-100/NI_DC9437-100-1.JPG",
        genero: "Mujer",
        category: "Running",
        price: '19.300',
        colors: '2',
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    },
];


export default products;
