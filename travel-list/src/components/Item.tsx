export default function Item(props: any) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.item.packed}
        onChange={() => props.onPackItem(props.item.id)}
      />
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button onClick={() => props.onDeleteItem(props.item.id)}>❌</button>
    </li>
  );
}
