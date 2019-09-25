const request = require('../request');
const db = require('../db');

describe('dogs api', () => {

  beforeEach(() => {
    return db.dropCollection('dogs');
  });

  const dogData = {
    breed: 'Alaskan Klee Kai',
    nicknames: ['AKK', 'Klee Kai', 'Miniature Alaskan Husky', 'Mini Husky'],
    size: ['small', 'medium'],
    appearance: {
      pattern: 'bicolor',
      color: 'grey and white'
    },
    weight: 16
  };

  function postDog(dog) {
    return request
      .post('/api/dogs')
      .send(dog)
      .expect(200)
      .then(({ body }) => body);
  }

  it.skip('post a dog', () => {
    return postCat(Alaskan Klee Kai)
      .then(dog => {
        expect(dog).toEqual({
          _id: expect.any(String),
          __v: 0,
          ...Alaskan Klee Kai
        });
      });
  });

  it.skip('gets a dog by id', () => {
    return postDog(Alaskan Klee Kai)
      .then(dog => {
        return request.get(`/api/dogs/${dog._id}`)
          .expect(200)
          .then(({ body }) => {
            expect(body).toEqual(dog);
          });
      });
  });

  it('gets a list of dogs', () => {
    return Promise.all([
      postDog({ breed: 'Alaskan Klee Kai', nicknames: ['AKK', 'Klee Kai', 'Miniature Alaskan Husky', 'Mini Husky'], size: ['small', 'medium'], appearance: {pattern: 'bicolor', color: 'grey and white'}, weight: 16 }),
      postDog({ breed: 'Alaskan Klee Kai2', nicknames: ['AKK', 'Klee Kai', 'Miniature Alaskan Husky', 'Mini Husky'], size: ['small', 'medium'], appearance: {pattern: 'bicolor', color: 'grey and white'}, weight: 16 }),
      postDog({ breed: 'Alaskan Klee Kai3', nicknames: ['AKK', 'Klee Kai', 'Miniature Alaskan Husky', 'Mini Husky'], size: ['small', 'medium'], appearance: {pattern: 'bicolor', color: 'grey and white'}, weight: 16 }),
    ])
      .then(() => {
        return request
          .get('/api/dogs')
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.length).toBe(3);
      });
  });

  it.skip('updates a dog', () => {
    return postDog(Alaskan Klee Kai)
      .then(dog => {
        dog.weight = 10;
        return request
          .put(`/api/dogs/${dog._id}`)
          .send(dog)
          .expect(200);
      })
      .then(({ body }) => {
        expect(body.weight).toBe(2);
      });
  });

  it.skip('deletes a dog', () => {
    return postDog(Alaskan Klee Kai)
      .then(dog => {
        return request
          .delete(`/api/dogs/${dog._id}`)
          .expect(200);
      });
  });

});