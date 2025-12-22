import { useState } from "react";

interface ListGroupProps {
  heading: string;
  items: string[];
  color:string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (items.length === 0)
    return (
      <>
        <h1>{heading}</h1>
        <p className="text-muted">هیچ آیتمی پیدا نشد.</p>
      </>
    );

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ?  "list-group-item-secondary active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;






















