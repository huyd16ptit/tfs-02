function clickNumber(input){
    calculator.display.value+=input
}

function displayCaculator(rawData){
    let data = rawData.split(/(\+|-|\*|\/)/)
    let query
    let url = "http://localhost:8080/calculate"
    console.log(data)
    if(data.length == 1 ){
        if(typeof +data[0] === "number") return data[0]
        return "error"
    } else if(data.length == 3) {
        if(typeof +data[0] === "number" && typeof +data[2] === "number"){

            switch(data[1]) {
                case "+":
                    op = "add"
                    break;
                case "-":
                    op = "sub"
                    break;
                case "*":
                    op = "mul"
                    break;
                case "/":
                    op = "div"
                    break;
                default:
                  return "error"
              }
            query="?op="+ op + "&a=" + data[0] + "&b=" +data[2];
            console.log(query)
            return callApi(url+query)
        } else return "error"

    } else{
        return "error"
    }
}

function callApi(url){
    res =  fetch(url).then(res => res.json).then(data => {
        console.log(data)
        return data.result
    })
}

