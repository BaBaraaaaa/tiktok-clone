import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
       <i>Page not found: {location.pathname}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
