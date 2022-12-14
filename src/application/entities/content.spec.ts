import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than five characteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more than two hundred fourteen characteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
