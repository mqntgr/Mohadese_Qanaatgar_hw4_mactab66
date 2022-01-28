let array = []
const str = "progress report template elementary school"
function del() {
    for(let i = 0; i<str.length; i++){
        if(str[i] != str[i+1]){
            array += str[i]
        }
    }
    return array
}
console.log(del())