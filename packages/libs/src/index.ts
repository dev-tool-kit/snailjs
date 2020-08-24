import * as fp from 'ramda';
import createDebug from 'debug';

export {
	fp,
	createDebug,
};

const debug = createDebug('lib:index');

export function add(a: number, b: number) {
	debug('args:', arguments);
	return a + b;
}