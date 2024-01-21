
export default function UserInput({inputChange ,userInput}) {
 

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => {
                inputChange("initialInvestment", event.target.value);
            }}
          >
          </input>
        </p>
        <p>
          <label>Aunnal Investment</label>
          <input type="number" required 
           value={userInput.annualInvestment}
           onChange={(event) => {
            inputChange("annualInvestment", event.target.value);
           }}
          >
          </input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required 
           value={userInput.expectedReturn}
           onChange={(event) => {
            inputChange("expectedReturn", event.target.value);
          }}
          >
          </input>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required 
           value={userInput.duration}
           onChange={(event) => {
            inputChange("duration", event.target.value);
          }}
          >
          </input>
        </p>
      </div>
    </section>
  );
}
