import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('actions', () => {
  const payload = ProductMock;

  test('addToCart Action', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
  test('removeFromCart Action', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
