function sleep(ms) {
return new Promise(function(resolve){
setTimeout(function() {
      resolve()
    }, ms)
  })
}

let p1 =  sleep(1500).then(function(){
    return {
        name: 'Promise 1500'
    }
})

let p2 = sleep(3000).then(function(){
   return {
       name: 'Promise 3000'
   }
})

async function start() {
    let dataAll = await Promise.all([p1, p2])
    
    let dataRace = await Promise.race([p1, p2])

    console.log(dataAll)
    console.log(dataRace)
}

start()
