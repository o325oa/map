const ErrorRepository = require('../src/ErrorRepository');

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.addError(404, 'Not Found');
    errorRepo.addError(500, 'Internal Server Error');
  });

  test('должен возвращать описание ошибки', () => {
    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
  });

  test('должен возвращать "Unknown error" для неизвестного кода', () => {
    expect(errorRepo.translate(403)).toBe('Unknown error');
  });

  test('должен добавлять новые ошибки', () => {
    errorRepo.addError(400, 'Bad Request');
    expect(errorRepo.translate(400)).toBe('Bad Request');
  });

  test('должен выбрасывать ошибку при нечисловом коде', () => {
    expect(() => errorRepo.addError('404', 'Error')).toThrow('Код ошибки должен быть числом');
  });
});