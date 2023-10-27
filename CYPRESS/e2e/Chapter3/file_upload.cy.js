describe('example visit commande',()=>{
    it('visit google',()=>{
        const my_file_path = 'product-1.jpg'  // path of file
        cy.visit('http://127.0.0.1:5501/form.html')
        cy.get(".document").attachFile(my_file_path).then(($file)=>{
            const up_file = $file.val()
            expect(up_file).to.contain('product-1.jpg')
        })
    })

})


