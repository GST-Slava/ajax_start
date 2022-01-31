/*function getImagesOld(pageNumber) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
    return promise;
}
подключена библиотека jquery-устаревшая библиотека 
*/


function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
    return promise.then((data) => {
        return data.data;
    });
} //подключена библиотека axios

function getTasks(title) {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=542132&count=30`)
    return promise.then((response) => {
        return response.data;
    });
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 542132,
        title: title
    });
    return promise.then((response) => {
        return response.data;
    });
}