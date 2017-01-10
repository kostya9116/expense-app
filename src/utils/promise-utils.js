export const attachPromiseHandlers = (promise, thenFunc, catchFunc) => {
    if (thenFunc) {
        promise.then(thenFunc);
    }
    if (catchFunc) {
        promise.catch(catchFunc);
    }

    return promise;
};