import { fp, add as libsAdd } from "@dev-tool-kit/libs"

export function add() {
	return fp.add(1, 2) + libsAdd(1, 2);
};