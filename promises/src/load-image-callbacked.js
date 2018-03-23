//loadImageCallbacked

function loadImageCallbacked(url, callback) {
    let image = new Image();

    image.onload = function() {
        callback(null, image)
    }

    image.onerror = function() {
        let msg = 'Could not load image at ' + url;
        callback(new Error(msg))
    }
    image.src = url
}
export default loadImageCallbacked