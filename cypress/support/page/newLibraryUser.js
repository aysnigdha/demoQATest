class NewUser {
    visitBookStore(){
      cy.visit("https://demoqa.com/register");
       cy.get("div[class='element-list collapse show'] li[id='item-0'] span[class='text']").click();
    }

    getFirstNameField() {
     return cy.get('#firstname');
    }

   getLastNameField() {
     return cy.get('#lastname');
    }

  getUserNameField() {
    return cy.get('#userName');
  }

  getPasswordField() {
    return cy.get('#password');
}
    newRegister(user){
        cy.get('#newUser').click();
        this.getFirstNameField().type(user.firstname);
        this.getLastNameField().type(user.lastname);
        this.getUserNameField().type(user.username);
        this.getPasswordField().type(user.password);
        cy.get('#register').click();
        cy.contains('Please verify reCaptcha').should('be.visible');
    }

}
export default new NewUser();