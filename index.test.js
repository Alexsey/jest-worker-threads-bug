const foo = jest.fn()

jest.doMock('./foo', () => foo)

const main = require('./index')

test('test', async () => {
  foo.mockImplementation(() => 'mock foo')

  const mockResult = await main()

  expect(mockResult).toEqual({
    outOfWorkerFoo: 'mock foo',
    workerFoo: 'mock foo'
  })
})
