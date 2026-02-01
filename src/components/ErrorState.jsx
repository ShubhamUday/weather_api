
const ErrorState = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-64 text-red-600">
      {message}
    </div>
  );
};

export default ErrorState;
