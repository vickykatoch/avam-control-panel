import { UserPreferenceModule } from './user-preference.module';

describe('UserPreferenceModule', () => {
  let userPreferenceModule: UserPreferenceModule;

  beforeEach(() => {
    userPreferenceModule = new UserPreferenceModule();
  });

  it('should create an instance', () => {
    expect(userPreferenceModule).toBeTruthy();
  });
});
