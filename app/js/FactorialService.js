var FactorialService = (function () {

    var _results = [1, 1];
      
    var _reg = new RegExp('^[0-9]+$');   
     
    function _isNumberValid(number) {
        return (_reg.test(number));        
    }
    
    function calculate(number) {
        if(!_isNumberValid(number)) return null;
        while(number >= _results.length) {
            _results.push(_results.length * calculate(_results.length - 1));
        }
        return _results[number];
    }

    //public api
    return {
        "calculate": calculate
    }

})();
