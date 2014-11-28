/**
 * Created by wfsovereign on 14-11-21.
 */
function CompareNumber(){

}

function judge(answer,inputs){
     var result;
    result= _.find(inputs,function(inp){
         if(inp ==answer){
             return true
         }
     });
    return result
}

CompareNumber.prototype.compares = function(input,answer){
    console.log(input,"+++++",answer);
    var inputs = input.split("");
    var answers = answer.split("");
    var a_count= 0,b_count=0;
    for(var i=0;i<inputs.length;i++){
        if(inputs[i] ==answers[i]){
            a_count+=1;
        }else if (judge(answers[i],inputs)!=undefined){
            b_count+=1;
        }
    }
    var result ;
    result= a_count+"A"+b_count+"B";
    return result;
};