export default function Bill({ bill, onsetbill }) {
  return (
    <>
      <label>how much was the bill:</label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => onsetbill(Number(e.target.value))}
      ></input>
    </>
  );
}
