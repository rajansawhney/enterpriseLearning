//loadImagePromised

function loadImagePromised(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = function () {
      resolve(image)
    }

    image.onerror = function () {
      let msg = 'Could not load image at ' + url
      reject(new Error(msg))
    }
    image.src = url
  })
}
export default loadImagePromised


