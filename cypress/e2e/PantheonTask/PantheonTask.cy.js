describe('dashboard', () => {
  it(`has title 'Tour of Heroes'`, () => {
    cy.visit("localhost:4200/dashboard");
    cy.contains('Tour of Heroes');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  })

  it (`has the correct search header`, () =>{
    cy.visit("localhost:4200/dashboard");
    cy.contains("Hero Search");

  })
  
  it ('can search', () => {
    cy.get('#search-box').type('Dr. Nice');
    cy.get('.search-result li').contains('Dr. Nice').click();
    cy.url().should('include', '/detail/12')
    cy.visit("http://localhost:4200/dashboard")
    cy.get('#search-box').type('Magma');
    cy.get('.search-result li').contains('Magma').click();
    cy.url().should('include', '/detail/19')
    cy.visit("http://localhost:4200/dashboard")
    cy.get('#search-box').type('Dynama');
    cy.get('.search-result li').contains('Dynama').click();
    cy.url().should('include', '/detail/17')
    cy.visit("http://localhost:4200/dashboard")
  })
  it(`Can rename hero`, () => {
    cy.visit("http://localhost:4200/dashboard");
    cy.contains('Bombasto').click();
    cy.get('#hero-name').type('Bumbisto');
    cy.contains('save').click();
    cy.contains('go back').click();
    cy.visit('http://localhost:4200/heroes');
    
    
  })
  it(`Has Messages and can clear messages- dashboard`, () => {
    cy.get('h2').should('contain','Messages');
    cy.contains('Clear messages').click();
    
    
  })
  it('reload the page dashboard', () => {
    cy.reload()
    cy.reload(true)
  })

})
describe('Heroes', () => {
  it(`has title 'Tour of Heroes'`, () => {
    cy.visit("http://localhost:4200/heroes");
    cy.contains('Tour of Heroes');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  })

  it(`Can add hero`, () => {
    cy.visit("http://localhost:4200/heroes");
    cy.get('#new-hero').type('Test123');
    cy.contains('Add hero').click();
    cy.contains('Test123').click();
    cy.visit('http://localhost:4200/heroes');
    
    
  })

  it(`Can delete hero`, () => {
    cy.visit("http://localhost:4200/heroes");
    cy.contains('x').click();
    cy.wait(200);
    cy.contains('x').click();
    cy.wait(200)
    cy.contains('x').click();
    cy.wait(200);
    cy.contains('x').click();
    cy.wait(200);
    cy.contains('x').click();
    cy.wait(200);
    cy.contains('x').click();
    cy.wait(200);
    cy.contains('x').click();
    cy.wait(200);
    cy.contains('x').click();
    cy.wait(200);
    cy.contains('x').click();
         
  })

  it(`Has Messages and can clear messages- heroes`, () => {
    cy.get('h2').should('contain','Messages');
    cy.contains('Clear messages').click();
    
    
  })

  it('reload the page heroes', () => {
    cy.reload()
    cy.reload(true)
  })
  it('testing viewport', () => {
    cy.viewport("iphone-xr");
    cy.viewport("samsung-s10");
    cy.viewport("macbook-16");
    cy.viewport(1920,1080);
    cy.viewport(1366,768);
    cy.viewport(360,640);
    cy.viewport(414,896);
    cy.viewport(1536,864);
  })


})
