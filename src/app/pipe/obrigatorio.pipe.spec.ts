import { ObrigatorioPipe } from './obrigatorio.pipe';

describe('ObrigatorioPipe', () => {
  let pipe: ObrigatorioPipe;

  beforeEach(() => {
    pipe = new ObrigatorioPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('obrigatorio', () => {
    expect(pipe.transform(true)).toEqual('Sim');
  });

  it('opcional', () => {
    expect(pipe.transform(false)).toEqual('Não');
  });

});
