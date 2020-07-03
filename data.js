let products = []
async function getDatas(){
    // alert("get data")
    const rawResponse = await fetch("http://localhost:9000/api/product/")
    const response = await rawResponse.json()
    return response
    // console.log(response)
    // products = response
}

getDatas()

// document.querySelector('#gridContainer')

// var customers = [{
//     "ID" : 1,
//     "CompanyName" : "Premier Buy",
//     "Address" : "7601 Penn Avenue South",
//     "City" : "Richfield",
//     "State" : "Minnesota",
//     "Zipcode" : 55423,
//     "Phone" : "(612) 291-1000",
//     "Fax" : "(612) 291-2001",
//     "Website" : "http =//www.nowebsitepremierbuy.com"
// }, {
//     "ID" : 2,
//     "CompanyName" : "ElectrixMax",
//     "Address" : "263 Shuman Blvd",
//     "City" : "Naperville",
//     "State" : "Illinois",
//     "Zipcode" : 60563,
//     "Phone" : "(630) 438-7800",
//     "Fax" : "(630) 438-7801",
//     "Website" : "http =//www.nowebsiteelectrixmax.com"
// }, {
//     "ID" : 3,
//     "CompanyName" : "Video Emporium",
//     "Address" : "1201 Elm Street",
//     "City" : "Dallas",
//     "State" : "Texas",
//     "Zipcode" : 75270,
//     "Phone" : "(214) 854-3000",
//     "Fax" : "(214) 854-3001",
//     "Website" : "http =//www.nowebsitevideoemporium.com"
// }, {
//     "ID" : 4,
//     "CompanyName" : "Screen Shop",
//     "Address" : "1000 Lowes Blvd",
//     "City" : "Mooresville",
//     "State" : "North Carolina",
//     "Zipcode" : 28117,
//     "Phone" : "(800) 445-6937",
//     "Fax" : "(800) 445-6938",
//     "Website" : "http =//www.nowebsitescreenshop.com"
// }];
// console.log(customers)