describe("async_sync",()=>{
    it('example',()=>{

        cy.log("Task One")
        cy.wait(10000).then(()=>{
            console.log("Task Two")
        })
        cy.log("Task Three")


        
        
    })
    
})

