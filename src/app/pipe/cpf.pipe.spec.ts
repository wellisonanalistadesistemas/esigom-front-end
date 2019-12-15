import { CpfPipe } from './cpf.pipe';

describe('CpfPipe', () => {
  let pipe: CpfPipe;

  beforeEach(() => {
    pipe = new CpfPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('cpf valido', () => {
    expect(pipe.transform('46351982006')).toEqual('463.519.820-06');
  });
});
