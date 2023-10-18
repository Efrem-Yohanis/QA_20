describe('example visit commande',()=>{
    it.only('url assertion',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.url().should('include','project1/form').and('eq','http://127.0.0.1:5500/project1/form.html')
        // the url must be  inculed "project1/form"
        // expect(value1).to.equal(value2)
        // expect(actual_result).to.equal(expect_result)

        var expect_result = "http://127.0.0.1:5500/project1/form.html"
        var actual_result = ""

        cy.url().then((sub)=>{
            actual_result = sub

            expect(actual_result).to.equal(expect_result)  
        }) 
    })
   
    it.only('text assertion',()=>{

        var expect_value = "First Page"
        var actual_value = ""

        cy.visit('http://127.0.0.1:5500/project1/form.html')

        cy.get('h1.text-center').then((sub)=>{
            actual_value = sub.text() 

            expect(actual_value).to.equal(expect_value)
            assert.equal(actual_value,expect_value)
        })
        
    })
    



})