var amsapp = angular.module('ams', []);

amsapp.controller('amsCtrl', ['$scope', function ($scope) {
    $scope.classlist = ['class1', 'class2', 'class3', 'class4'];
    $scope.selectedclass = 'Select Class';
    $scope.selectClass = function (classSelected) { $scope.selectedclass = classSelected; };

    $scope.sectionlist = ['section1', 'section2'];
    $scope.selectedSection = "Select Section";
    $scope.selectSection = function (sectionSelected) { $scope.selectedSection = sectionSelected; };
    $scope.message = "hello world";
    
    $scope.data = [
                            {
                            "class": "class1",
                            "section": "section1",
                            "students": [
                                { "id": "1", "name": "javeed" },
                                { "id": "2", "name": "mohaamd" }
                            ]

                            },
                            {
                                "class": "class1",
                                "section": "section2",
                                "students": [
                                    { "id": "3", "name": "javeedas" },
                                    { "id": "4", "name": "mohaamdai" }
                                ]

                            },
                            {
                                "class": "class2",
                                "section": "section1",
                                "students": [
                                     { "id": "5", "name": "rohit" },
                                     { "id": "6", "name": "sharma" }
                                ]

                            },
                            {
                                "class": "class2",
                                "section": "section2",
                                "students": {
                                    "student": [{ "id": "7", "name": "sodi" }, { "id": "8", "name": "sollu" }]
                                }

                            },
                        ]
    //$scope.selectedStudent = "Select Student";
    //$scope.students = $scope.studentlist[$scope.selectedclass];
    console.log($scope.data);
    console.log($scope.data[0].students[0].name)
    //reset button
    $scope.reset = function () {
        //$scope.selectedclass = 'Select Class';
        //$scope.selectedSection = 'Select Section';
        
    }
}]);