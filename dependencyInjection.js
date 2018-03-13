// dependency injection JS

const assert = require('assert')

function getAnimals(fetch,id) {
    //globally available in browser, not in node
    return fetch('http://api.animalfarmgame.com/animals/' + id)
        .then(response => response.json())
        .then(data => data.results[0])

}

/* 
    With dependency injection 
*/

// function getAnimals(fetch, id) {
//     return fetch('http://api.animalfarmgame.com/animals/' + id)
//         .then(response => response.json())
//         .then(data => data.results[0])

// }

describe('getAnimals', () => {
    /* 1
        calls fetch with url -- uses the id we have passed in
    */
    // it('works in the basic case', () => {
    //     getAnimals(123)
    // })

    /* 2 
    
    We want to intercept this fetch call.
    The test above does not have any say over how getAnimals calls fetch. 
    Test has no way of getting into getAnimals body. Can't inspect what's going on in there
    
    */
    it('calls fetch with the correct url', () => { 
        const fakeFetch = url => {
            assert(url === 'http://api.animalfarmgame.com/animals/12345')
            return new Promise(function(resolve){
                
            })
        }
        getAnimals(fakeFetch,123)
    })

    /* 3 */
    // it('parses the response of fetch correctly',(done) => {
    //     const fakeFetch = () => {
    //         return Promise.resolve({
    //             json: () => Promise.resolve({
    //                 results: [
    //                     {
    //                         name: 'norbert',
    //                         type: 'dragon'
    //                     }
    //                 ]
    //             })
    //         })
    //     }
    //     getAnimals(fakeFetch, 12345)
    //         .then(result => 
    //             assert(result.name === 'dragon'),
    //             done()
    //         )

    // })
});

//module.exports = getAnimals;