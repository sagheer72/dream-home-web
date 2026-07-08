import CountUp from "react-countup";

function TestCounter() {
  return (
    <div className="flex items-center justify-center h-screen text-7xl font-bold">
      <CountUp start={0} end={100} duration={5} />
    </div>
  );
}

export default TestCounter;