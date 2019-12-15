import { ProjetoPipe } from './projeto.pipe';

describe('ProjetoPipe', () => {
  let pipe: ProjetoPipe;

  beforeEach(() => {
    pipe = new ProjetoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('projeto basico', () => {
    expect(pipe.transform(9)).toEqual('Projeto Basico');
  });

  it('projeto executivo', () => {
    expect(pipe.transform(10)).toEqual('Projeto Executivo');
  });
});
