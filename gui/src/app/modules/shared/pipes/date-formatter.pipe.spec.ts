import { DateFormatterPipe } from './date-formatter.pipe';

describe('DateFrommatterPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
