export default function Tip({ text, per, onset }) {
  return (
    <>
      <label>{text}</label>
      <select value={per} onChange={(e) => onset(Number(e.target.value))}>
        <option value="0">dissastisfied (0%)</option>
        <option value="5">meh (5%)</option>
        <option value="10">some what satisfactory (10%)</option>
        <option value="20">extremly satisfied (20%)</option>
      </select>
    </>
  );
}
