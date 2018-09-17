import { UserConfigModule } from './user-config.module';

describe('UserConfigModule', () => {
  let userConfigModule: UserConfigModule;

  beforeEach(() => {
    userConfigModule = new UserConfigModule();
  });

  it('should create an instance', () => {
    expect(userConfigModule).toBeTruthy();
  });
});
