import User from '../domain/User'
interface IUserRepository {
    get userId(): string
    signUp(user: User): string
}
export default IUserRepository