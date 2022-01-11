const soma = require('./soma')

test("Somar 1 + 1 igual 2", ()=> {
    expect(soma(1,1)).toBe(2);
});