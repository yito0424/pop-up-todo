import User from '../domain/User'
import SignUpResult from '../view/model/SignUpResult'

interface IUserRepository {
    get userId(): string
    signUp(user: User): Promise<SignUpResult>
}
export default IUserRepository