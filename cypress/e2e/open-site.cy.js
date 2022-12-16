describe('Tests in my home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('type in my input', () => {
        cy.get('#input-name').type('Richard Matheus');
        cy.get('#btn-insert').click();

        cy.get('#input-name').type('Marcos Jr');
        cy.get('#btn-insert').click();

        cy.get('#input-name').type('Aline Santos');
        cy.get('#btn-insert').click();

        cy.get('ul').first().should('contain', 'Richard Matheus');

        cy.get('ul').last().should('contain', 'Aline Santos');

        cy.get('h2');

        cy.findByText('Inserindo nome')
    });

    it('change text title', () => {
        cy.findByText('Inserindo nome');

        cy.get('#btn-change-text').click();

        cy.findByText('Editando nome');

    });
});