// callback.js

import loadImageCallbacked from './load-image-callbacked'


let addImg = (src) => {
    let imgElement = document.createElement("img");
    imgElement.src = src;
    document.body.appendChild(imgElement);
}

loadImageCallbacked('images/dog1.gif', (error, img1) => {
    if(error) throw error;
    addImg(img1.src)
    loadImageCallbacked('images/dog2.gif', (error, img2) => {
        if(error) throw error;
        addImg(img2.src)
        loadImageCallbacked('images/dog3.gif', (error, img3) => {
            if(error) throw error;
            addImg(img3.src)
        })
    })
})