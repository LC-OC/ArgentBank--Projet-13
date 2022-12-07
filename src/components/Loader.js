import React, { useState, useEffect } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Loader;
