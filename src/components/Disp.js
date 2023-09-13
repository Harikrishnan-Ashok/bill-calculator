export default function Disp({ bill, percent }) {
  return (
    <h2>
      you pay {bill + percent} ({bill} + {percent} tip)
    </h2>
  );
}
