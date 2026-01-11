class Home{
    visitHome(){
    cy.visit("https://demoqa.com/");
    }
   goToElements(){
    cy.get("svg[stroke='currentColor'][fill='currentColor'][stroke-width='0'][viewBox='0 0 448 512']").click();
    cy.url().should('include', '/elements');
    cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-right > .icon').click();  
}  
}

export default new Home();