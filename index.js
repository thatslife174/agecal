function get_result(){
    var _age = document.getElementById("age").value
    var res = document.getElementById("result")
    if(_age == ''){
        res.innerHTML = "Bạn đã nhập đéo đâu"
    } else if(_age > 0 && _age <= 1000){
        res.innerHTML = "Tuổi của bạn là: " + _age
    } else {
        res.innerHTML = _age + " là tuổi clg"
    }
}