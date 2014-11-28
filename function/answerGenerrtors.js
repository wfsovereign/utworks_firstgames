/**
 * Created by wfsovereign on 14-11-21.
 */
function Build_answerGenerrtors(){

}

Build_answerGenerrtors.prototype.isNumbers =function(value){
    var split_value = value.split("");
    if(split_value.length !=4){
        return false
    }else
        return judge_number(value)== undefined
};

function judge_number(array){
    var result ;
    result= _.find(array,function(arr){
        return isNaN(arr)!=false;
    });
    return result
}

Build_answerGenerrtors.prototype.is_no_duplicate = function(array){
    var hash={};
    for(var i in array){
        if(hash[array[i]]){
            return false;
        }
        hash[array[i]]=true;
    }
    return true;
};

Build_answerGenerrtors.prototype.get_random_number = function(){
    var random_string =[];

    while(random_string.length<4){
        var i=1;
        var random_value = Math.floor(Math.random()*10).toString();
        if(judge_duplicate(random_string,random_value) == undefined){
            random_string.push(random_value)
        }
        i++;
    }
    var random_result="";
    _.each(random_string,function(value){
        random_result+=value.toString();
    });
    return random_result;
};

function judge_duplicate(array,value){
    var result;
    result = _.find(array,function(arr){
       return arr==value
    });
    return result;

}