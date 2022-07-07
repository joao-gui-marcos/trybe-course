const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('hello', console.log)

test('Testando uppercase, str = hello', (done) => {
  uppercase('hello', (str) => {
    try {
      expect(str).toBe('HELLO');
      done();
    } catch (error) {
      done(error);
    }
  });
});