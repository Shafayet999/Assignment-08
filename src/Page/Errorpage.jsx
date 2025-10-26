import { Link, useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import errorImage from '../assets/error-404.png'

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="grow flex flex-col items-center justify-center text-center px-6">
        <img
          src={errorImage}
          alt="404 Illustration"
          className="w-64 h-64 mb-6"
        />
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 mt-2">
          {error?.statusText || "The page you are looking for is not available."}
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
        >
          Go Back Home
        </Link>
      </main>

      
      <Footer />
    </div>
  );
};

export default ErrorPage;
