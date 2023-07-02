/* repository가 undefined인 경우 */
const object1 = {
    repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
    repository: {
        readme: undefined,
    },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
    repository: {
        readme: {
            extension: 'md',
            content: '금융을 쉽고 간편하게',
        },
    },
};

function safelyGet(object, path) {
    const properties = path.split('.');
    let current = object;

    for (const property of properties) {
        if (current === undefined) {
            return undefined;
        }
        current = current[property];
    }

    return current;
}

const result = [
    'undefined',
    'undefined',
    'undefined',
    'undefined',
    '{ readme: undefined }',
    'md',
    "{ extension: 'md' }",
];

function test(answer, myCode) {}

test(result);
