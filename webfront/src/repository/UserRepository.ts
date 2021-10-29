import IUserRepository from './IUserRepository';
import User from '../domain/User';
import ILocalStorageClient from '../utils/localStorageClient/ILocalStorageClient';
import IAPIClient from '../utils/APIClient/IAPIClient';
import UserResponse from './response/UserResponse';
import { isErrorResponse } from './response/ErrorResponse';
import SignUpResult from '../view/model/SignUpResult';

class UserRepository implements IUserRepository {
  private static USER_ID_KEY = 'USER_ID_KEY';
  private usva = 'useid';
  private localStorageClient: ILocalStorageClient;
  private apiClient: IAPIClient;

  constructor(localStorageClient: ILocalStorageClient, apiClient: IAPIClient) {
    this.localStorageClient = localStorageClient;
    this.apiClient = apiClient;
  }

  public get userId(): string {
    return this.usva;
  }

  public async signUp(user: User): Promise<SignUpResult> {
    const response = await this.apiClient.post<User, UserResponse>(user);
    if (isErrorResponse(response)) {
      const result: SignUpResult = {
        isSucceeded: false,
        message: response.message,
        name: '',
      };

      return result;
    }
    this.localStorageClient.setItem<UserResponse>(response);
    const result: SignUpResult = {
      isSucceeded: true,
      message: '',
      name: response.name,
    };

    return result;
  }
}

export default UserRepository;
