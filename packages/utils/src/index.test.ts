import { add } from './index';

describe('@utils/index', () => {
	test('add', () => {
		expect(add()).toEqual(6);
	});
});
