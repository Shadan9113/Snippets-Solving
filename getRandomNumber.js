function getRandomNumer(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(getRandomNumer(1,10));