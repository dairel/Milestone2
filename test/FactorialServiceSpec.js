
describe('FactorialService.js', function() {
    
    it('calcular fatorial de um numero', function() {
        expect(FactorialService.calculate(1)).toBe(1);
        expect(FactorialService.calculate(2)).toBe(2);
        expect(FactorialService.calculate(3)).toBe(6);
        expect(FactorialService.calculate(4)).toBe(24);
        expect(FactorialService.calculate(5)).toBe(120);
    });
    
    it('retornar 1 se o numero for 0', function() {
        expect(FactorialService.calculate(0)).toBe(1);
    });
    
    it('retorna 1 se parametro for invalido', function() {
        expect(FactorialService.calculate(-1)).toBe(null);
        expect(FactorialService.calculate("")).toBe(null);
        expect(FactorialService.calculate()).toBe(null);
    });
    
    it('retornar nulo para parametros invalidos', function() {
        expect(FactorialService.calculate('5xx')).toBe(null);
        expect(FactorialService.calculate('x5x')).toBe(null);
        expect(FactorialService.calculate('xx5')).toBe(null);
    });
    
    it('retornar nulo se o numero for float, não inteiro', function() {
        expect(FactorialService.calculate(5.5)).toBe(null);
    });        
});
    