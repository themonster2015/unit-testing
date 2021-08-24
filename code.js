 const exercise1 = (str) => {
     if(str.length === 0 || str.length > 10){
         throw new Error("string too short or too long")
         
     }
    return str.length
}
module.exports = exercise1

