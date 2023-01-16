export default [
    {
        input: 'src/modules/lib/asprLwcUtils/asprLwcUtils.js',
        output: {
            file: 'dist/asprLwcUtils.js',
            format: 'iife',
            name: 'asprLwcUtils'
        }
    },
    {
        input: 'src/modules/lib/asprLwcUtils/asprLwcUtils.js',
        output: {
            file: 'package/force-app/main/default/staticresources/asprLwcUtils.js',
            format: 'iife',
            name: 'asprLwcUtils'
        }
    },
]