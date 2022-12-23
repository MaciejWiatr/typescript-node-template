import { sayHello } from './hello';

it('welcomes user', () => {
  const logSpy = jest.spyOn(console, 'log');

  sayHello();

  expect(logSpy).toHaveBeenCalledWith(
    '🌺Hello from typescript-node-template🌺'
  );
});
