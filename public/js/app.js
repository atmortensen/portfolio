const app = angular.module('portfolio', [])

app.directive('menu', function(){
	return {
		templateUrl: '../directives/menu.html',
		restrict: 'E',
		replace: true,
		link: (scope, element) => {
        smoothScroll.init({
        	speed: 2000
        })

        const animateMenu = () => {
					const scrollPos = window.pageYOffset || document.documentElement.scrollTop
        	if (scrollPos < 75) {
						element.addClass('at-top')
					 } else {
						 element.removeClass('at-top')
					 }
        }
        angular.element(document)[0].addEventListener('scroll', animateMenu)

				angular.element(document).ready(() => {
					new Rellax('.rellax')
					gumshoe.init()
				})
		}
	}
})

app.directive('cover', function(){
	return {
		templateUrl: '../directives/cover.html',
		restrict: 'E',
		replace: true
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