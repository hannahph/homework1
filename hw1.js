my_list = []
function addToArray(){
    var number_to_add = Number(document.getElementById('num_to_add').value);
    if (my_list[0] == ''){
        my_list = [number_to_add]
    }
    else {
        my_list.push(number_to_add)
    }
    document.getElementById('list_output').innerText='My List: '+my_list;
}




function runFunction(){
    if(document.getElementById('function').value=="Maximum"){
        var result = findMax(my_list);
    }
    if(document.getElementById('function').value=="Minimum"){
        var result = findMin(my_list);
    }
    document.getElementById('function_output').innerText='Result: '+result;
    my_list=[]
    document.getElementById('list_output').innerText='My List: '+my_list;
}



function findMax(input_array){
    var maxValue = 0;
    for (var i=0;i<input_array.length;i++){
        if (input_array[i]>maxValue){
            maxValue=input_array[i];
        }
    }
    return maxValue
}


function findMin(input_array){
    var minValue = input_array[0];
    for (var i=0;i<input_array.length;i++){
        if (input_array[i]<minValue){
            minValue=input_array[i];
        }
    }
    return minValue
}
