describe('common Cypress Assertion',()=>{
    it.only('Length check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html') 
        cy.get('.as-table').find('tbody>tr')
         .first().as('first_row')

          cy.xpath("/html/body/div/div/div[2]/div/table/tbody/tr[1]").as("frx")
          cy.get("@frx").should('have.length.lte', 5)
 // gt 
 // gte
 // lt
 // lte
         cy.xpath("/html/body/div/div/div[2]/div/table/tbody/tr[1]").then((sub)=>{
            var x = sub
            expect(x).to.have.length(1)
         })
         
        //   cy.xpath("/html/body/div/div/div[2]/div/table/tbody/tr[1]").then((sub)=>{
        //      const value = sub;
        //      expect(value).to.have.length.gte(1)
        //   })

         
    })
    it('.to.have.length',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html') 
        cy.get('.as-table').find('tbody>tr').first().then((sub)=>{
            expect(sub).to.have.length(1)
        })
        cy.get('.as-table').find('tbody>tr').find('td').then((sub)=>{
            expect(sub).to.have.length(4)
        })
    })
    it('class check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')  
        cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').should('have.class','btn-primary')
    })
    it('test contain check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('.text-center').should('contain','Table for test')
        cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').should('contain','Change')
    })
    it('Visibility check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('.text-center').should('be.visible')
    })
    it('exist check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/home.html')
        cy.get('.text-center').should('exist')
    })

    it('value check',()=>{
        cy.visit('http://127.0.0.1:5500/project1/form.html')
        cy.get('#fname').should('have.value','Efrem').debug()

    })
    
})