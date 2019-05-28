import { DevListeModule } from './dev-liste.module';

describe('DevListeModule', () => {
  let devListeModule: DevListeModule;

  beforeEach(() => {
    devListeModule = new DevListeModule();
  });

  it('should create an instance', () => {
    expect(devListeModule).toBeTruthy();
  });
});
