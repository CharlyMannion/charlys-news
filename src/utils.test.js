const { trimDate } = require("./utils")

describe('trimDate', () => {
    it('returns the date in the correct format', () => {
        const result = '2017-12-24';
        expect(trimDate('2017-12-24T05:38:51.240Z')).toBe(result);
    })
})