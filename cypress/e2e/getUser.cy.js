describe('get API test', ()=> {
    it('Should able to retrive specific user', ()=> {
   cy.request('https://gorest.co.in/public/v1/users?id=1601').then((response) => {
        expect(response.status).to.eq(200);
   })
    })
})