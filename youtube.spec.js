describe('Test for RisePeople', () => {
	it('Verify title and uploader info of found video', () => {
		
		//Visit youtube.com
		cy.visit('https://www.youtube.com/') 
		//Search for “The whole working-from-home thing — Apple” 
		//cy.pause()
		cy.get('#search')
			.type('The whole working-from-home thing — Apple')
		cy.get('#search-icon-legacy')
			.click()

		//click on the video
		cy.contains('The whole working-from-home thing — Apple')
			.click()	

		//wait for the page to load.
		cy.intercept('https://www.youtube.com/generate_204*')
				.as('getVideo')
			cy.wait('@getVideo')

		//Assert that the title of the video matches what you searched for previously 
		cy.get('#info-contents')
			.find('h1')
			.should('contain', 'The whole working-from-home thing — Apple')
			.and('have.class', 'title')
     		
		//Assert that the uploader is “Apple”
		cy.get('#upload-info')
			.find('a')
			.should('contain', 'Apple')
			.and('have.attr', 'href', '/channel/UCE_M8A5yxnLfW0KghEeajjw')
	})
})

