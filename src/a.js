Array.from = ()=>{
    return "AAA"
}

setTimeout(()=>{
    console.log(Array.from("aaa"))
}, 1000)