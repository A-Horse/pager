/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var ngVer = '@2.0.0-rc.3'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.0.0-alpha.7'; // lock router version
  var formsVer = '@0.1.1'; // lock forms version
  var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides
  
  var map = {
    '@angular':                   'https://unpkg.com/@angular', // sufficient if we didn't pin the version
    '@angular/router':            'https://unpkg.com/@angular/router',
    '@angular/forms':             'https://unpkg.com/@angular/forms',
    '@angular/router-deprecated': 'https://unpkg.com/@angular/router-deprecated' + routerDeprecatedVer,
    'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api', // get latest
    'rxjs':                       'https://unpkg.com/rxjs@5.0.0-beta.6',
    'ts':                         'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript':                 'https://unpkg.com/typescript@1.9.0-dev.20160409/lib/typescript.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
