/**
 * Call a function a number fix of time with interval of time
 * @param callback The function must be execute multiple time
 * @param delay The delay between two call
 * @param repetitions The number of iteration
 * @return Promise
 */
export function setIntervalPromiseX(callback: Function, delay: number, repetitions: number) : Promise<void> {
    return new Promise((resolve, reject) => {
        let x = 0;
        const intervalID = setInterval(function () {

            try {
                callback();
            }
            catch(e)
            {
                reject(e)
            }

            if (++x === repetitions) {
                clearInterval(intervalID);
                resolve();
            }
        }, delay);
    })
}

/**
 * Call a function a while a condition is not true with interval of time
 * @param callback The function must be execute multiple time
 * @param delay The delay between two call
 * @param stop_condition A function who return the condition of exit
 * @return Promise
 */
export function setIntervalConditionPromise(callback: Function, delay: number, stop_condition: Function) : Promise<void> {
    return new Promise((resolve, reject) => {
        let x = 0;
        const intervalID = setInterval(function () {

            try {
                callback();
            }
            catch(e)
            {
                reject(e)
            }

            if (stop_condition()) {
                clearInterval(intervalID);
                resolve();
            }
        }, delay);
    })
}