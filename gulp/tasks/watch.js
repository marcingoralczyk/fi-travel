var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();
//Zegar odpalany przez komente - gulp watch
//inicjuemy wszystko czym ma się zajmować gulp jak jest uruchomiony Zegar
// np uruchamianiem tasków
gulp.task('watch', function() {
    //wskazanie index.html
    browserSync.init({
      //wylaczenie okienka powiadomień
      notify: false,
      server: {
        baseDir: "app"
      }
    });
    //auto refresh html
    watch('./app/index.html', function() {
      browserSync.reload();
    });
    //uruchamianie zadania(task) cssInject wskazując na katalog z plikami CSS
    watch('./app/assets/styles/**/*.css', function() {
      gulp.start('cssInject');
    });
});
//Zadanie które odświerza automatycznie CSS oraz do uruchomienia potrzebuje uruchomić najpierw
// zadanie styles
// Inject nie zacznie dzialac dopóki nie zazdiala styles
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/style.css')
      .pipe(browserSync.stream());
});
