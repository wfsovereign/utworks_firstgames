猜数字游戏
=========

### 游戏规则
1. 用户输入四个非重复数字,只能是数字.
2. 点击数字可得到类似"2A2B"或是"congratulation"的答案.A前面的2代表的是你输入的数字中有两个与答案的位置一致且值一致,B前面的2代表的是你输入的数字中有两个数字是存在于答案中的但是位置不一致.当得到"congratulation"时表示你所猜想答案正确.
3. 本次游戏共有**六次**猜测机会,请珍惜.


[源代码库](https://github.com/wfsovereign)
![](./image/F.jpg)

``` javacript

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

```
|学员名字        | 性别   |  年龄  |
| --------   | -----:  | :----:  |
| 冯杨琦君    | 男 |   21     |
> 逆水行舟
f(x,y,z) = 3y^2z\left(3+\frac{7x+5}{1+y^2}\right)
