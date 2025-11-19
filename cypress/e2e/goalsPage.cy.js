import gl from '../pages/goals/index.js'


describe('Goals Page visit and title check', () => {

    beforeEach(() => {
        //Arrange
        gl.visitPage()
    })

    // Assert
    it('Should have the correct url and page title', () => {
        
        gl.goalsContentCheck()
    }) 
    
})