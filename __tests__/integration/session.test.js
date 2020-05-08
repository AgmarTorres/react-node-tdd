const { User } = require('../../src/app/models');


describe('Authentication', () => {
  
    it('should sum two numbers', async () =>{
        const user = await User.create({ name: "Agmar", email: "agmartorres@gmail.com", password_hash: "123"})
        console.log( user )
        expect(user.email).toBe('agmartorres@gmail.com')
    })
})