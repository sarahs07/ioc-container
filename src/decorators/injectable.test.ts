import { Injectable } from './injectable';

describe('Injectable', () => {
  let injectable = Injectable;
  let mockDepClass = class mockDepClass { };

  test('injectable function should be called once added as a decorator', () => {
    let mockFunction = jest.fn().mockImplementation(injectable).mockName('injector mock');

    @Injectable('mockService', mockDepClass, [])
    class mockClass { }

    expect(mockFunction).toHaveBeenCalled();
  });
});
