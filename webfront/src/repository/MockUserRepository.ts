import IUserRepository from './IUserRepository';

class MockUserRepository implements IUserRepository {
  private static USER_ID_KEY = 'USER_ID_KEY';
  private usva = "useid"
  public get userId(): string {
    return this.usva;
  }
}

export default MockUserRepository;
