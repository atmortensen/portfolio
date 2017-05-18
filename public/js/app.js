const app = angular.module('portfolio', [])

app.directive('menu', function(){
	return {
		templateUrl: '../directives/menu.html',
		restrict: 'E',
		replace: true,
		link: () => {
      smoothScroll.init({
      	speed: 1000,
      	easing: 'easeInOutQuint'
      })

			angular.element(document).ready(gumshoe.init)
		}
	}
})

app.directive('cover', function(){
	return {
		templateUrl: '../directives/cover.html',
		restrict: 'E',
		replace: true,
		link: () => {
			new Rellax('.rellax')
		}
	}
})

app.directive('summary', function(){
	return {
		templateUrl: '../directives/summary.html',
		restrict: 'E',
		replace: true
	}
})

app.directive('skills', function(){
	return {
		templateUrl: '../directives/skills.html',
		restrict: 'E',
		replace: true
	}
})

app.directive('projects', function(){
	return {
		templateUrl: '../directives/projects.html',
		restrict: 'E',
		replace: true
	}
})

app.directive('contact', function(){
	return {
		templateUrl: '../directives/contact.html',
		restrict: 'E',
		replace: true
	}
})