const defaults = {};

module.exports = (opts = {}) => {
  const options = { ...defaults, ...opts };

  const customMiddlewareBefore = async (request) => {
    // simulate store internal sub from JWT
    const sub = '1234567890';
    request.internal.sub = sub;
  };

  return {
    // Having descriptive function names will allow for easier tracking of performance bottlenecks using @middy/core/profiler
    before: customMiddlewareBefore,
  };
};
