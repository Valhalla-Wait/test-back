export const query = <T>(data: T, ms?: number) => new Promise<T>((resovle, reject) =>{
    setTimeout(() => {
        resovle(data)
    }, ms ?? 1000)
})