const getAnimals = require('./dependencyInjection')


test('getAnimals //basic test', () => {
    expect(() => { 
        getAnimals(window.fetch, 123)
    })
});