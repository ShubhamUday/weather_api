const LoadingCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="mt-6 h-8 bg-gray-200 rounded w-1/3" />
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
};

export default LoadingCard;
