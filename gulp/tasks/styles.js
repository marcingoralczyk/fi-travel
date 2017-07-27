var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'), //automatyczne prefixy do innych przeglądarek
cssvars = require('postcss-simple-vars'), // możliwość dodawania zmiennych $newColor: #fff;
nested = require('postcss-nested'), // zagniezdzanie w bloku
cssImport = require('postcss-import'), //import zeby zrobic chierarchie plikow css
mixins = require('postcss-mixins'); // 

//automatyzowanie CSS - post CSS
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/style.css')
      .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
      .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/styles'));
});
