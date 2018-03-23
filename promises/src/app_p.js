// promises.js

import loadImagePromised from './load-image-promised'

const addImg = (src) => {
  let imgElement =
    document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImagePromised('images/dog1.gif'),
  loadImagePromised('images/dog2.gif'),
  loadImagePromised('images/dog3.gif'),
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  document.write(error)

  const errImg = document.createElement("img");
  document.body.appendChild(document.createElement('br'))
  document.body.appendChild(document.createElement('br'))
  errImg.src = 'images/error.jpeg'
  document.body.appendChild(errImg)
})
