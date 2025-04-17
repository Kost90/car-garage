function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-40">
      <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
