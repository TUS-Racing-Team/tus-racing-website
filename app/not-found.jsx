import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found-body">
      <div>
        <div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="bubble"></div>
          ))}
        </div>

        <div className="main">
          <h1>404</h1>
          <p>
            It looks like you're lost...
            <br />
            That's a trouble?
          </p>
          <button type="button">Go back</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
