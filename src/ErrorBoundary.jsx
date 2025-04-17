import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">
          {error.status} {error.statusText}
        </h1>
        {error.data && <p className="text-gray-700">{error.data}</p>}
        <Link to={'/'}>Go back to garage</Link>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">Oops something went wrong.</h1>
        <p className="text-gray-700">{error.message}</p>
        <Link to={'/'}>Go back to garage</Link>
      </div>
    );
  }

  return <h1 className="text-red-600">Unknown Error</h1>;
}
