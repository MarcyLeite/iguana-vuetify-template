/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default [
  { plugins: { '@stylistic/ts': stylisticTs } },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      'vue/multi-word-component-names': 'off',
      '@stylistic/ts/indent': ['error', 2],
      '@/max-len': ['error', { code: 120, "ignoreComments": true }],
      '@/object-curly-spacing': ['error', 'always'],
      '@/array-bracket-newline': ['error', { multiline: true }],
      '@/object-curly-newline': ['error', { multiline: true }]
    }
  }
]
