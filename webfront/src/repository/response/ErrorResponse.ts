type ErrorResponse = {
  message: string;
};

const isErrorResponse = (arg: unknown): arg is ErrorResponse => {
  const errorResponse = arg as ErrorResponse;

  return typeof errorResponse?.message === 'string';
};
export default ErrorResponse;
export { isErrorResponse };
