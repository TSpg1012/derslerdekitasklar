import { useState } from "react";
import "./App.css";
import { Student } from "./OOP/student";
import { Employee } from "./OOP/employee";
import { Human } from "./OOP/student";



function App() {
  const [human, setHuman] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);
  const [groupname, setGroupname] = useState("");
  const [gpa, setGPA] = useState(0);
  const [hobby, setHobby] = useState("");
  const [salary, setSalary] = useState(0);
  const [skills, setSkills] = useState("");
  const [position, setPosition] = useState<string>("");
  const [lit, setLit] = useState<Human[]>([]);

  return (
    <>
      <form
        action="./"
        style={{ marginLeft: "10px" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <br />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="surname"
          className="surname"
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="age"
          className="age"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
        <select
          value={Position.HR}
          className="Human"
          onChange={(e) => {
            if (e.target.value === "student") {
              setHuman("student");
            } else {
              setHuman("employee");
            }
          }}
        >
          <option value="student">student</option>
          <option value="employee">employee</option>
        </select>
        <br />
        <br />
        {human === "student" ? (
          <div>
            <input
              type="text"
              placeholder="Groupname"
              className="groupname"
              onChange={(e) => {
                setGroupname(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              type="number"
              placeholder="GPA"
              className="gpa"
              onChange={(e) => {
                setGPA(Number(e.target.value));
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Hobbies"
              className="hobbies"
              onChange={(e) => {
                setHobby(e.target.value);
              }}
            />
            <br />
          </div>
        ) : human === "employee" ? (
          <div className="employee">
            <input
              type="number"
              placeholder="Salary"
              className="salary"
              onChange={(e) => {
                setSalary(Number(e.target.value));
              }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Skills"
              className="skills"
              onChange={(e) => {
                setSkills(e.target.value);
              }}
            />
            <br />
            <br />
            <select
              className="position"
              onChange={(e) => {
                const selectedValue = e.target.value;
                console.log(selectedValue == "HR");
                if (selectedValue == "HR") {
                  setPosition(Position.HR);
                } else if (selectedValue == "IT") {
                  setPosition(Position.IT);
                }
              }}
            >
              <option
                selected={true}
                style={{ display: "none" }}
                value="dsaasd"
              >
                Position
              </option>
              <option value="HR">Hr</option>
              <option value="IT">It</option>
            </select>
            <br />
          </div>
        ) : (
          ""
        )}
        <br />
        <button
          className="submit"
          onClick={() => {
            if (human === "student") {
              const student = new Student(
                name,
                surname,
                age,
                groupname,
                gpa,
                hobby
              );
              setLit((prevLit) => [...prevLit, student]);
            } else {
              const employee = new Employee(
                name,
                surname,
                age,
                salary,
                skills,
                Position.HR
              );
              console.log(employee);
              console.log("position=", position);
              setLit((prevLit) => [...prevLit, employee]);
            }
          }}
        >
          Submit
        </button>
      </form>

      <br />
      <br />
      <br />
      <ul>
        {lit &&
          lit.map((elem) => {
            return <li>{elem.getInfo()}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
