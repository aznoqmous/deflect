class Deflect {
    
    static save(scope, method){
        const saves = []

        const save = scope[method]

        Object.defineProperty(scope, method, {
            get: ()=>{
                const fileName = this.__getFileName((new Error()).stack)                
                return saves[fileName] ? saves[fileName] : save
            },
            set: (value)=>{
                const fileName = this.__getFileName((new Error()).stack)
                saves[fileName] = value
            }
        })
    }

    static __getFileName(stack){
        stack = stack.match(/\/([^\/]*)\:[0-9]*?\:[0-9]*?$/)
        return stack[1]
    }
}

window.Deflect = Deflect