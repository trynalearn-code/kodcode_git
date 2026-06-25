
export function idCreater(){
    let id = 1
    return function(){
        return id++
    }
}



