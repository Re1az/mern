export default function App() {
  const handleEvenOdd = () => {
    const number = Number(prompt("What is the number?"));

    if (isNaN(number)) {
      alert("Please enter a valid number");
      return;
    }

    if (number % 2 === 0) {
      alert("The number is even");
    } else {
      alert("The number is odd");
    }
  };

  return (
    <div className="p-5">
      <button
        onClick={handleEvenOdd}
        className="bg-black text-white rounded-lg p-3 cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
}
