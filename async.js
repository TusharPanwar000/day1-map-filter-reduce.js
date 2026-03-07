// function  khanaOrder() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Khana ready hai")
//       }, 2000)
//     })
// }


// async function deliver() {
//   console.log("Order aaya.....");
//   let massege = await khanaOrder();
//   console.log(massege);
//   console.log("Deliver ho gyaa!")
// }

// deliver();



// function khanaOrder(available) {
//   return new Promise((resolve, reject) => {
//     if(available){
//       resolve("Khana ready hai....")
//     }else {
//       reject("Khana available nahii hai....")
//     }
//   }, 2000);
// }



// async function deliver(){
//     try {
//       console.log("Order aaya....");
//       let massage = await khanaOrder(false);
//       console.log(massage);
//       console.log("Deliver ho gaya!");
//     } catch (error){
//       console.log("Error: ", error);
//     }
//   }
//   deliver();



async function getData () {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1") ;
    let data = await response.json();
    console.log("data name",data.name);
    console.log("data email",data.email);
  }catch (error){
    console.log("Error: ", error)
  }
}

getData();