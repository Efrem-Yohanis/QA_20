describe('tast case folder', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Test case folder 1',function (){
   it('Test Case 1',()=>{
     // Test step
     // 1. vist (open on test runnr) arrage
     cy.vist(url)  // command   =>  1. bulit in commande cypress provide, 2. custome commande 
         // url    https://www.google.com, local machin or remote sarver 
    // 2. selete or locate 
      cy.get() // css locator, id, class, attrbute (name,)
      cy.contain() // based on text 
      
      cy.xpath() // xpath locator =// cypress can't support xpath selector by default, we need to install the puligen (module)
      .find()
    // 3. intraction with element 
         .type()
         .click()
         .check()
         .select()
    // 4. assertion 
        // what is the actual value and expected value we do comartion.
        // if the expected value equal with actual value our test pass
         
    })
    it('test case 2', function (){
      
    })
})

// in one test file we have many describe() bloke
// in one describe blok we have many it() bloke 
// we can use arrow function or nameless function in both case => describe() or it()

// ()=>{ } => arrow function function () { } => name less function 