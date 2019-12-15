import { ParecerPipe } from './parecer.pipe';

describe('ParecerPipe', () => {
  let pipe: ParecerPipe;

  beforeEach(() => {
    pipe = new ParecerPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('parecer tecnico', () => {
    expect(pipe.transform(8)).toEqual('Parecer Técnico');
  });

  it('parecer juridico', () => {
    expect(pipe.transform(7)).toEqual('Parecer Juridico do Edital e Minuta do Contrato ou Instrumento Equivalente');
  });

});
