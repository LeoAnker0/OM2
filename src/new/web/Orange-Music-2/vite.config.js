import { defineConfig } from 'vite';
import { createFilter } from '@rollup/pluginutils';

const htmlImport = {
    name: 'htmlImport',
    async transform(code, id) {
        const filter = createFilter(['**/*.html']);

        if (filter(id)) {
            code = `export default ${JSON.stringify(code)}`;
        }

        return { code };
    },
};

export default defineConfig({
    plugins: [htmlImport],
});