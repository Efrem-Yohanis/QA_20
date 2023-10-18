describe('assertion',()=>{
    it('implicit_assertion_example1',()=>{
        //1. visit web page
        cy.visit("http://127.0.0.1:5500/project1/form.html")   
        // 2. select element
        cy.get('#fname')
        // 3. intract with element
        .type("craft")
        // 4. assertion 
        .should("have.value","craft")
               
    })

    it('implicit_assertion_exxample2',()=>{
        //1. visit web page
        cy.visit("http://127.0.0.1:5500/project1/form.html")   
        // 2. select element
        cy.get('h1.text-center')
        
        
        // 3. assertion 
        .should("exist")
        .and('be.visible')
        .and('contain',"First Page")
               
    })
})