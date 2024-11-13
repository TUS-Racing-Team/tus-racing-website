import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="content">
        <h1>404</h1>
        <p>Uh-oh! Looks like the page you're looking for doesn't exist.</p>
        <p>
          Don't worry, though! You can always go back to the homepage or check
          out other pages.
        </p>
        <a href="/" className="return-home">
          Return to home <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
