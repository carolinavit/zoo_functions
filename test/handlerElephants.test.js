const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4;', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson;', () => {
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5;', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Para o argumento location deve retornar a string NW;', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Não passando argumentos a função deve retornar undefined;', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Para o argumento popularity deve retornar um número igual ou maior a 5;', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday;', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Passando por argumento um objeto vazio ({}) deve retornar erro', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Passada uma string que não contempla uma funcionalidade deve retornar null.', () => {
    expect(handlerElephants(' ')).toBe(null);
  });
});
