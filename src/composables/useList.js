import { useState, ChangeEvent, FormEvent } from 'react';

export default function useList(initial) {
  const [items, setItems] = useState(initial);
  const [item, setItem] = useState('');

  const input = (e) => setItem(e.target.value);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { id: Math.random(), name: item }]);
    setItem('');
  };

  const sortUp = (item) => {
    const sorted = [...items];
    const index = sorted.findIndex((i) => item.id === i.id);
    if (index) {
      sorted.splice(index - 1, 0, ...sorted.splice(index, 1));
      setItems(sorted);
    }
  };

  const sortDown = (item) => {
    const sorted = [...items];
    const index = sorted.findIndex((i) => item.id === i.id);
    if (index < sorted.length - 1) {
      sorted.splice(index + 1, 0, ...sorted.splice(index, 1));
      setItems(sorted);
    }
  };

  const sortList = () => {
    const sorted = [...items].sort((a, b) => {
      const nameA = a.name.toLowerCase().trim();
      const nameB = b.name.toLowerCase().trim();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
    setItems(sorted);
  };

  const remove = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
  };
  return [items, item, addItem, input, sortUp, sortDown, sortList, remove];
}
