import { add } from './index';

describe('libs/index', () => {
	test('add', () => {
		expect(add(1, 2)).toEqual(3);
	})
})