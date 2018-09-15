import { LogAnalyzerModule } from './log-analyzer.module';

describe('LogAnalyzerModule', () => {
  let logAnalyzerModule: LogAnalyzerModule;

  beforeEach(() => {
    logAnalyzerModule = new LogAnalyzerModule();
  });

  it('should create an instance', () => {
    expect(logAnalyzerModule).toBeTruthy();
  });
});
