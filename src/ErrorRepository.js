class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(code, description) {
    if (typeof code !== 'number') {
      throw new Error('Код ошибки должен быть числом');
    }
    this.errors.set(code, description);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}

module.exports = ErrorRepository;