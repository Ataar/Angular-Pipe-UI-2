

export interface Iproduct
{
    pname: string,
    pid: string,
    pstatus: "Processing" | "Awaiting Shipment" | "Shipped" | "Delivered"
     | "Out for Delivery" |"Order Confirmed" | "Pending Payment" | "In Transit" | "Cancelled",
    canReturn: number
    image:string,
    productUrl:string
}









// ----------------------------------------------------------------





// export interface Iproduct
// {
//     pname: string,
//     pid: string,
//     pstatus: string,
//     canReturn: number
//     price:number,
//     image:string,
//     kg:string,
//     title:string
// }

