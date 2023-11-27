<<<<<<< HEAD
// function isPrime(num){
//     if ( num == 1 ) {
//         console.log("ne sade ne murekkeb ededdir")
//     }
//     else if ( num > 1 ){
//         for( let i = 2 ; i < num ; i++){
//             if ( num%i==0 ){
//                 return false
//             }
//             else{
//                 if (num == i+1){
//                     return true
//                 }
//             }
//         }
//     }
// }
// console.log(isPrime(10))

// function countsOfPrimeNumbers(arr){
//     let count = 0 
//     for ( let i = 0 ; i < arr.length ; i++ ){
//         if ( isPrime(arr[i])){
//             count++
//         }
//     }
        
//     return count

// }

// arr = [ 7, 6, 8, 4, 13 ,10]
// console.log(countsOfPrimeNumbers(arr))

let car = {
    brand: "Porche" ,
    model: "GT3" ,
    year: 2018 ,
    mileage: 10000 , 
    fuelfor1KM: 16 ,
    fullCapacity: 64 , 
    currentFuel: 32 ,
    increaseFuel: function(num){
        if ( num+this.currentFuel>this.fullCapacity){
            alert("you fuel limit isnt enough")
        }
        else{
            return this.currentFuel += num 
        }
    } ,
    drive: function(num){
        if ( num * this.fuelfor1KM > this.currentFuel){
            alert("you can not drive till that KM")
        }
        else{
            return this.currentFuel-=(num*this.fuelfor1KM) , this.mileage+=num
        }
    }
}
// console.log(car)
console.log(car.increaseFuel(32))
console.log(car.drive(4))
=======
// function isPrime(num){
//     if ( num == 1 ) {
//         console.log("ne sade ne murekkeb ededdir")
//     }
//     else if ( num > 1 ){
//         for( let i = 2 ; i < num ; i++){
//             if ( num%i==0 ){
//                 return false
//             }
//             else{
//                 if (num == i+1){
//                     return true
//                 }
//             }
//         }
//     }
// }
// console.log(isPrime(10))

// function countsOfPrimeNumbers(arr){
//     let count = 0 
//     for ( let i = 0 ; i < arr.length ; i++ ){
//         if ( isPrime(arr[i])){
//             count++
//         }
//     }
        
//     return count

// }

// arr = [ 7, 6, 8, 4, 13 ,10]
// console.log(countsOfPrimeNumbers(arr))

let car = {
    brand: "Porche" ,
    model: "GT3" ,
    year: 2018 ,
    mileage: 10000 , 
    fuelfor1KM: 16 ,
    fullCapacity: 64 , 
    currentFuel: 32 ,
    increaseFuel: function(num){
        if ( num+this.currentFuel>this.fullCapacity){
            alert("you fuel limit isnt enough")
        }
        else{
            return this.currentFuel += num 
        }
    } ,
    drive: function(num){
        if ( num * this.fuelfor1KM > this.currentFuel){
            alert("you can not drive till that KM")
        }
        else{
            return this.currentFuel-=(num*this.fuelfor1KM) , this.mileage+=num
        }
    }
}
// console.log(car)
console.log(car.increaseFuel(32))
console.log(car.drive(4))
>>>>>>> b665549cb1d5913634b2fc81f7e24b674029856a
console.log(car)