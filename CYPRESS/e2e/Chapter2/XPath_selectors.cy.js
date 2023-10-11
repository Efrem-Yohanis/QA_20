describe('example visit commande',()=>{
    it('visit google',()=>{
        cy.visit('https://www.google.com/')

        cy.xpath("//textarea[@id='APjFqb']").type("cypress tutorial")
        
    })
    it('local fiel',()=>{
        cy.visit("http://127.0.0.1:5500/Registration.html")
        cy.xpath("//input[@id='fname']").type("efrem")
    })
})