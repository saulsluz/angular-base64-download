// aGVsbG8=

describe('ngBase64Download', function () {
  
    var app = angular.module('testDownloadApp', [
      'ngBase64Download'
    ])
  
    var $compile,
      $rootScope,
      element;
  
    describe('service', function () {
  
      describe('download()', function () {
  
        // Load the app module, which contains the directive
        beforeEach(angular.mock.module('testDownloadApp'));
  
        // Store references to $rootScope and $compile
        // so they are available to all tests in this describe block
        beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_, _base64DownloadConfig_, _base64DownloadFactory_) {
          // The injector unwraps the underscores (_) from around the parameter names when matching
          $compile = _$compile_;
          $scope = _$rootScope_.$new();
          base64DownloadConfig = _base64DownloadConfig_;
          base64DownloadFactory = _base64DownloadFactory_;
        }))
  
        beforeEach(function () {
          $scope.str = base64DownloadFactory.download('data:text/plain;base64,aGVsbG8=')
        })
  
        it('Should contain hello', function () {
          expect($scope.str).toEqual('hello')
        })

      })
  
    })
    
  });