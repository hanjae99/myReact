import React, { useEffect, useState } from "react";

const UsePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, resolved, error];
};

export default UsePromise;
