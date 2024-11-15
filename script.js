const mixedArray = [42, 'hello', true, null, undefined, { name: 'Alice' }, [1, 2, 3]];

let categorizeDataTypes = (arr)=>{
    let result ={
        number:[],
        string:[],
        boolean:[],
        object:[],
        undefined:[]
    }
    for(let i = 0; i < mixedArray.length; i++){
        // console.log(typeof(arr[i]));
        if(typeof(arr[i]) === "number"){
            result.number.push(arr[i])
        }
        else if(typeof(arr[i]) === "string"){
            result.string.push(arr[i])
        }
        else if(typeof(arr[i]) === "boolean"){
            result.boolean.push(arr[i])
        }
        else if(typeof(arr[i]) === "object"){
            result.object.push(arr[i])
        }
        else{
            result.undefined.push(arr[i])
        }
    }
    console.log(result)
}
categorizeDataTypes(mixedArray)
