import { CnpjPipe } from './cnpj.pipe';

describe('CnpjPipe', () => {
  let pipe: CnpjPipe;

  beforeEach(() => {
    pipe = new CnpjPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('cnpj valido', () => {
    expect(pipe.transform('19192132000190')).toEqual('19.192.132/0001-90');
  });
});
