import ErrorResponse from '../../repository/response/ErrorResponse';

interface IAPIClient {
    post<Value, Response>(value: Value): Promise<Response | ErrorResponse>
}

export default IAPIClient