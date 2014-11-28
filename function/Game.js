/**
 * Created by wfsovereign on 14-11-28.
 */
var count = 5;
function Games(){

}

Games.prototype.result = function(input){

    var judge = new Judge();
    compare = new CompareNumber();
    if(count>0){
        if(judge.duplicate(input) !=true){
            $(".prompt").html( "<em style='color: red'>"+"Cannot input duplicate numbers!"+"</em>");
        }else if(judge.number(input) == false){
            $(".prompt").html("<em style='color: red'>"+"Haven't input four numbers!"+"</em>");
        }else if(answer == input){
            count =0;
            $("#guess_value").attr("disabled","true");
            $(".prompt").html("<em style='color: red'>"+"Congratulations!"+"</em>");
            $(".answer").html("");
            $(".go_btn").attr("disabled","true");

        }else{
            //console.log( answers.get_random_number(),"answer");
           // console.log(input);
            var result = new Guess(compare);
            var result_str = result.get_answer(input)//+"\nPlease input your number("+ count+"):";

            $(".answer").html(result_str);
            $(".prompt").html("Please input your number("+ count+"):");
            count -=1;
        }
    } else{
            $(".prompt").html("<em style='color: red'>"+"Gameover!"+"</em>");
    }
};


function Judge(){

}

Judge.prototype.duplicate = function(value){
    var hash={};
    for(var i in value){
        if(hash[value[i]]){
            return false;
        }
        hash[value[i]]=true;
    }
    return true;
};

Judge.prototype.number = function(value){
    var split_value = value.split("");
    if(split_value.length !=4){
        return false
    }else{
        return judge_number(value)== undefined
    }

};

function judge_number(array){
    var result ;
    result= _.find(array,function(arr){
        return isNaN(arr)!=false;
    });
    return result
}


$(function(){
    $(".go_btn").on('click',go_click);

});

var player = new Games();

function go_click(){
    //location.reload(true);
    player.result( $("#guess_value").val());



    if($(".prompt").html() =='<em style="color: red">Congratulations!</em>'){
        $(".answer").html("  <button class='btn btn-default btn-primary refresh' onclick='location.reload()'>再玩一次</button>")
    }
}
