angular.module('directivePractice').directive('lessonHider', function(){
  return {
    restrict: 'E',
    templateUrl: 'lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    link: function(scope, element, attrs){
      scope.getSchedule.then(function(response){
        scope.schedule = response.data

        scope.schedule.forEach(function(scheduleDay){
          if(scheduleDay.lesson === scope.lesson){
            element.css('text-decoration', 'line-through');
            // console.log(scope.schedule)
            for(var i = 0; i < scope.schedule.length; i++){
              if(scheduleDay.lesson === scope.schedule[i].lesson)
            scope.lessonDay = scope.schedule[i].weekday;
          }
            return;
          }
        })
      })


    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    }
  }
});
