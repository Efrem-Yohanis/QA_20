describe('example visit commande',()=>{
    it('visit google',()=>{
        cy.visit('http://127.0.0.1:5501/home.html')

        cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('btn')
        

        cy.get('@btn').click()

       
        
        //html/body/div/div/div[2]/div/table/tbody/tr[1]/td[1]/button
    })
   
    



})