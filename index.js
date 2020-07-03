// const =  require("./server/connect-mongo");
// window.onload = search()
// window.onload = async (e) => 
window.onload = () => {
    document.getElementById('keyword').onsubmit = function () {
        console.log(title.value)
        return false
    }
    async function search(){
        const rawResponse =await fetch("http://localhost:9000/api/product/")
        const response = await rawResponse.json()
        for (i = 0; i < response.length; i++) {
            console.log(response[i].title)
        }
    
    }
    search()
}
// console.log(title.value)
// const productApiUrl = "http://localhost:9000/api/product/"
async function getDatas() {
    // alert("get data")
    const rawResponse = await fetch("http://localhost:9000/api/product/")
    const response = await rawResponse.json()
    console.log(response)
    for (i = 0; i < 3; i++) {
        console.log(response[i].title)
    }
    $("#gridContainer").dxDataGrid({
        dataSource: response,
        showBorders: true,
        paging: {
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        columns: ["title", "categories", "avatar", "description", "price"]
    });
    // return response
}

async function atoz() {
    // alert("get data")
    const rawResponse = await fetch("http://localhost:9000/api/productasc/")
    const response = await rawResponse.json()
    // console.log(response)
    $("#gridContainer").dxDataGrid({
        dataSource: response,
        showBorders: true,
        paging: {
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        columns: ["title", "categories", "avatar", "description", "price"]
    })
}

async function ztoa() {
    // alert("get data")
    const rawResponse = await fetch("http://localhost:9000/api/productdesc/")
    const response = await rawResponse.json()
    // console.log(response)
    $("#gridContainer").dxDataGrid({
        dataSource: response,
        showBorders: true,
        paging: {
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        columns: ["title", "categories", "avatar", "description", "price"]
    })
}

// async function search() {
//     document.getElementById('keyword').onsubmit = function () {
//         console.log(title.value)
//         return false
//     }
// }
// search()
getDatas()
atoz()
ztoa()
// onClick()
// searchFunction()
// search()
