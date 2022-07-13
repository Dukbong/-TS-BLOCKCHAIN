// @ts-check
/**
 * Initializes the project
 * @param {object} config  // config는 오브젝트 형식
 * @param {boolean} config.debug // config에 debug: boolean
 * @param {string} config.url // config에 url: string
 * @returns boolean
 */
export function init(config){
    return true;
}

/**
 * Exit the program
 * @param {number} code 
 * @returns number
 */
export function exit(code){
    return code + 1;
}