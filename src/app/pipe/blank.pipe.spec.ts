import { BlankPipe } from './blank.pipe';

describe('BlankPipe', () => {
  let pipe: BlankPipe;

  beforeEach(() => {
    pipe = new BlankPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('blank text', () => {
    expect(pipe.transform('')).toEqual(' - ');
  });

  it('text', () => {
    expect(pipe.transform('123')).toEqual('123');
  });
});
