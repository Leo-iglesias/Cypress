describe('test', () => {
  it('Registro de usuario', () => {
    const numeroRandom = Math.floor(Math.random() * 1000)
    cy.visit('');
    cy.get('#user').type(`pushingiT${numeroRandom}`);
    cy.get('[type="password"]').type('123456!');
    cy.get('[value="Male"]').check({force:true})
    cy.get("[id='day']").select('4'); // value 4
    cy.get('#month').select('February'); // texto visible
    cy.get('#year').select('1995'); // valor '10' o la opción que necesites
    cy.get('[type="submit"]').click(); // Submit
    cy.wait(9500)
    cy.get('#todolistlink').click()
    cy.get('#task').type('Automation Test')
    cy.get('#sendTask').click()
    cy.wait(1000)
    cy.contains('Automation Test').click()
  });
});