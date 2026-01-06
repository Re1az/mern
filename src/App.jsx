export default function App() {
  return (
    <div>
      <Child
        name={"ram"}
        age={90}
        address={{
          city: "bangalore",
          state: "karnataka",
        }}
        jobs={["developer", "tester"]}
      />
    </div>
  );
}

function Child({ name, age, address, jobs }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{address.city}</h3>
      <h3>{address.state}</h3>
      <h4>
        {" "}
        {jobs.map((item) => {
          return <li key={item.id}>{item}</li>;
        })}
      </h4>
    </div>
  );
}
