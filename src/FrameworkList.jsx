import React, { forwardRef } from 'react';
import Arrow from './Arrow';
import Close from './Close';
import useList from './composables/useList';

export default forwardRef(function list(props, ref) {
  const [items, item, addItem, input, sortUp, sortDown, sortList, remove] =
    useList([
      { id: 0, name: 'Nuxt.js' },
      { id: 1, name: 'Next.js' },
      { id: 2, name: 'SvelteKit' },
      { id: 3, name: 'Remix' },
      { id: 4, name: 'Meteor' },
    ]);
  return (
    <div className="stage" data-has-animation={ref ? true : null}>
      <div className="logo">
        {(ref && (
          <img
            src="https://cdn.formk.it/web-assets/logo-auto-animate.svg"
            width="300"
            height="37"
          />
        )) ||
          'Default react'}
      </div>
      <ul ref={ref}>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <div className="action-icons">
              <button onClick={() => sortUp(item)}>
                <Arrow direction="up" />
              </button>
              <button onClick={() => sortDown(item)}>
                <Arrow direction="down" />
              </button>
              <button className="remove" onClick={() => remove(item)}>
                <Close />
              </button>
            </div>
          </li>
        ))}
        <li>
          <form onSubmit={addItem}>
            <input
              placeholder="Add another..."
              type="text"
              value={item}
              onChange={input}
            />
            <button type="submit">Add</button>
            <button type="button" onClick={() => sortList()}>
              Sort
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
});
