import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    setupFilesAfterEnv: [
        "<rootDir>/jest.setup.ts"
    ],
    verbose: true,
    testEnvironment: "jsdom"
};
export default config;
