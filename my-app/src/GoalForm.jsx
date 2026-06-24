export const GoalForm = ({ goal, handleGoalChange, handleGoalSubmit }) => {
  return (
    <form onSubmit={handleGoalSubmit}>
      <section>What is your main goal for today?</section>
      <input value={goal} onChange={handleGoalChange}/>
      <button>Submit</button>
    </form>
  );
};