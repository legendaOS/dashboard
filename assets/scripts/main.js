function handeResponse(response){
    response.json()
    .then(handleJson)
    .catch(handleError)
}

function handleError(error){
    console.log('произошла ошибка')
    console.log(error)
}

function handleJson(data){
    
    const filteredData = data.sort(sortByDate)
    console.log(filteredData)
    
}

function filterStatus(item){
    if(item?.Status){
        return true
    }
    return false
}

function sortByDate(prev, next){
    if(Number(prev?.Created_Date) > Number(next?.Created_Date)){
        return 1
    }
    if(Number(prev?.Created_Date) < Number(next?.Created_Date)){
        return -1
    }
    return 0
}



fetch('http://run.mocky.io/v3/07e933af-e485-496d-a981-017001f8bb77')
.then(handeResponse)
.catch(handleError)