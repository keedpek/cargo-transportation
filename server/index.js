require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]', 
});


require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')