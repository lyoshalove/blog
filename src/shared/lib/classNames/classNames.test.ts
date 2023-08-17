import { classNames } from '.';

describe('classNames', () => {
  test('With only first param', () => {
    expect(classNames('snusClass')).toBe('snusClass');
  });

  test('With additional class', () => {
    const expected = 'snusClass class1 class2';
    expect(classNames('snusClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('With mods(all true)', () => {
    const expected = 'snusClass class1 class2 hovered scrollable';
    expect(
      classNames(
        'snusClass',
        { hovered: true, scrollable: true },
        ['class1', 'class2'],
      ),
    ).toBe(expected);
  });

  test('With mods(with false)', () => {
    const expected = 'snusClass class1 class2 hovered snusable';
    expect(
      classNames(
        'snusClass',
        { hovered: true, scrollable: false, snusable: true },
        ['class1', 'class2'],
      ),
    ).toBe(expected);
  });

  test('With mods(with undefined)', () => {
    const expected = 'snusClass class1 class2 hovered';
    expect(
      classNames(
        'snusClass',
        { hovered: true, scrollable: false, snusable: undefined },
        ['class1', 'class2'],
      ),
    ).toBe(expected);
  });
});
