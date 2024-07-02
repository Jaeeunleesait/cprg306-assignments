export default function Item({ itemObj, onSelect }) {
  const { name, quantity, category } = itemObj;
  return (
    <div
      onClick={onSelect}
      className="text-neutral-50 bg-violet-800 pl-2 m-5 w-96"
    >
      <p className="font-bold text-xl">{name}</p>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
