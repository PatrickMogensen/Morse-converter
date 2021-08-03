const { convertTextToMorse, convertMorseToText } = require('./public/script.js')

test('convert text to morse code', () => {
    const output = convertTextToMorse('sos e')
    expect(output).toBe("... --- ... / .")
})

test('convert morse code to text ', () => {
    const output = convertMorseToText('... --- ... / .')
    expect(output).toBe("sos e")
})
