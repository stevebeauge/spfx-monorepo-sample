'use strict';

const gulp_core = require("@microsoft/gulp-core-build");
const gulp = require('gulp');


const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.tslintCmd.enabled = false;

class CustomSPWebBuildRig extends build.SPWebBuildRig {
  getTasks() {
    const result = super.getTasks();

    const bundleTaskExec = result.get(
      build.WebBuildRigConstants.tasks.bundle
    ).executable;

    result.set('watch', {
      executable:
        gulp_core.serial(
          bundleTaskExec, // 1st build to show any compilation error
          gulp_core.watch(
            build.serveWatchFilter,
            gulp_core.serial(
              this._preTelemetryTask,
              bundleTaskExec,
              this._postTelemetryTask
            )
          )
        )
    });
    return result;
  }

}

build.rig = new CustomSPWebBuildRig();



// 1st attempt. Does not works
// /* Custom watch */

// const watchTask = build.subTask('watch', function (gulp, buildOptions, done) {

//   return gulp.watch(
//     build.serveWatchFilter, 
//     series('bundle')
//   );

// });

// build.task('watch', watchTask);


build.initialize(gulp);
