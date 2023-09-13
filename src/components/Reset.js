export default function Reset({ onsetbill, onsetp1, onsetp2 }) {
  function reset() {
    onsetbill("");
    onsetp1(0);
    onsetp2(0);
  }
  return (
    <>
      <button onClick={reset}>reset</button>
    </>
  );
}
