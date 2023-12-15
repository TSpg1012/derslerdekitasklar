var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this.age = age;
    }
    Human.prototype.getInfo = function () {
        return "".concat(this.Fullname, "  ");
    };
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "Fullname", {
        get: function () {
            return "".concat(this._surname, " ").concat(this._name, "  ");
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var position;
(function (position) {
    position["IT"] = "IT";
    position["HR"] = "HR";
})(position || (position = {}));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skills, position) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.salary = salary;
        _this.skills = skills;
        _this.position = position;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        return "".concat(this.Fullname, " is ").concat(position.IT);
    };
    return Employee;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, GPA, hobbies) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        if (GPA < 0 || GPA > 100) {
            _this._GPA = 0;
        }
        else {
            _this._GPA = GPA;
        }
        _this.hobbies = hobbies;
        return _this;
    }
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (value) {
            if (value >= 0 && value <= 100) {
                this._GPA = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        if (this._GPA < 50) {
            return false;
        }
        else {
            return true;
        }
    };
    Student.prototype.getInfo = function () {
        return "".concat(this.Fullname, " studies in ").concat(this.groupName, " & has GPA:").concat(this.GPA);
    };
    return Student;
}(Human));
var form = document.querySelector(".form");
var nameInp = document.querySelector(".name");
var surnameinp = document.querySelector(".surname");
var age = document.querySelector(".age");
var human = document.querySelector(".Human");
var groupname = document.querySelector(".groupname");
var gpa = document.querySelector(".gpa");
var hobbies = document.querySelector(".hobbies");
var salary = document.querySelector(".salary");
var skills = document.querySelector(".skills");
var positionInp = document.querySelector(".position");
var students = document.querySelector(".students");
var employee = document.querySelector(".employee");
human.addEventListener("change", function () {
    if (human.value === "student") {
        students.style.display = "block";
        employee.style.display = "none";
    }
    else {
        employee.style.display = "block";
        students.style.display = "none";
    }
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newAge = Number(age.value);
    var newGpa = Number(gpa.value);
    var newSalary = Number(salary.value);
    var newPosition;
    if (positionInp.value === "HR") {
        newPosition = position.HR;
    }
    else {
        newPosition = position.IT;
    }
    if (human.value === "student") {
        var student = new Student(nameInp.value, surnameinp.value, newAge, groupname.value, newGpa, hobbies.value);
        console.log(student);
    }
    else {
        var employee_1 = new Employee(nameInp.value, surnameinp.value, newAge, newSalary, skills.value, newPosition);
        console.log(employee_1);
    }
});
