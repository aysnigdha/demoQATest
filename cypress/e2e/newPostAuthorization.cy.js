describe('POST new user API test', () => {
  it('should return false for invalid credential', () => {

    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      failOnStatusCode: false,
      body: {
        userName: "pohjfhdf",
        password: "9847Hdfdss./"
      }
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('User not found!'); 
    });

  });
});
