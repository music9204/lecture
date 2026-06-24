import { useState } from "react";
import { useEffect } from "react";
import { GreetingForm } from "./GreetingForm";
import { GoalForm } from "./GoalForm";

const App = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState(false);
  const [goal, setGoal] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    setLogin(true);
    localStorage.setItem("username", name);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (!savedUsername) return;

    setName(savedUsername);
    setLogin(true);

    const savedGoalMessage = localStorage.getItem("goalMessage");
    if (!savedGoalMessage) return;

    setGoal(savedGoalMessage);
    setSubmit(true);
  }, []);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleGoalSubmit = () => {
    setSubmit(true);
    localStorage.setItem("goalMessage", goal);
  };

  return (
    <div>
      {login ? (
        <div>
          <p>Hello, {name}</p>
          {submit ? (
            <div>
              <p>Today</p>
              <p type="checkbox">{goal}</p>
              <input type="checkbox" />
            </div>
          ) : (
            <GoalForm
              goal={goal}
              handleGoalChange={handleGoalChange}
              handleGoalSubmit={handleGoalSubmit}
            />
          )}
        </div>
      ) : (
        <GreetingForm
          name={name}
          handleChange={handleChange}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default App;
