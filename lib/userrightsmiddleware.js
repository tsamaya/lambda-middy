const defaults = {};

module.exports = (opts = {}) => {
  const options = { ...defaults, ...opts };

  const customMiddlewareBefore = async (request) => {
    console.log(`userrights middleware `, { internal: request.internal });

    // simulate getting rights
    request.event.rights = ['Allow'];
    // request.event.rights = ['Deny'];
    // return 'ok';
  };

  return {
    // Having descriptive function names will allow for easier tracking of performance bottlenecks using @middy/core/profiler
    before: customMiddlewareBefore,
  };
};
