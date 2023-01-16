import type { IDataAllPage } from "../interfaces";

const dataForAllPage: IDataAllPage[] = [
	{
		"id": "445aea58-50b7-44dc-98b5-39069186def4",
		"name": "Агапова Татьяна Николаевна",
		"engineer_name": "test",
		"path_file": "./tmp/test13.txt",
		"createdAt": "2022-12-16T15:42:41.770766779+03:00"
	}
];

async function getDataUsersForAllPage(): Promise<IDataAllPage[]> {
	/* eslint-disable */
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(dataForAllPage);
		}, 500);
	});
	/* eslint-enable */
};

export { getDataUsersForAllPage };
