const mix = require('laravel-mix');
const config = require('./package.json').mix;

mix.js('src/app.js', 'dist')
    .sass('src/app.scss', 'dist')
    .setPublicPath('dist');
    
mix.copy('src/index.html', 'dist');

const DEVSERVER_PATH=config.publicPath;
const DEVSERVER_PROXY=config.proxy;
const DEVSERVER_PORT=config.port;

mix.browserSync({
    server: DEVSERVER_PATH,
    port: DEVSERVER_PORT,
    proxy: DEVSERVER_PROXY,
    files: [
        'src/**/*'
    ]
});

mix.disableNotifications();