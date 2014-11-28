/**
 * Created by wfsovereign on 14-11-24.
 */
var answers = new Build_answerGenerrtors();
 answer = answers.get_random_number();

function Guess(compare){


    this.compare = compare.compares;

}

Guess.prototype.get_answer = function(input){
    var result;
    result = this.compare(input,answer);
    return result;
};