import { ArquivoPipe } from './arquivo.pipe';

describe('ArquivoPipe', () => {
  let pipe: ArquivoPipe;

  beforeEach(() => {
    pipe = new ArquivoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('sem arquivo', () => {
    expect(pipe.transform('')).toEqual(' Nenhum arquivo selecionado ');
  });

  it('com arquivo', () => {
    expect(pipe.transform('teste')).toEqual('teste');
  });
});
