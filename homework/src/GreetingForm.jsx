export const GreetingForm = ({name, handleChange, handleLogin}) => {
  return (
    <form onSubmit={handleLogin}>
      <section>Hello!What's your name?</section>
      <input value={name} onChange={handleChange} />
      <button>Continue</button>
    </form>
  );
};