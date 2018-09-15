import { UserWorkspaceModule } from './user-workspace.module';

describe('UserWorkspaceModule', () => {
  let userWorkspaceModule: UserWorkspaceModule;

  beforeEach(() => {
    userWorkspaceModule = new UserWorkspaceModule();
  });

  it('should create an instance', () => {
    expect(userWorkspaceModule).toBeTruthy();
  });
});
