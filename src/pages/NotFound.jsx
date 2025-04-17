import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-4">Sorry, we couldn&apos;t find the page you were looking for.</p>
      <Link to="/" className="text-mainBlack hover:text-blue-500 no-underline">
        Back to Garage
      </Link>
    </div>
  );
}
