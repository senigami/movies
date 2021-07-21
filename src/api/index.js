import data from './mock-data'
const LATENCY = 1600

export function updatePath({path}, cb) {
    setTimeout(() => {
        cb(data)
    }, LATENCY)
}

export function refreshList(cb) {

    setTimeout(function () {
        cb(message)
    }, LATENCY)
}
