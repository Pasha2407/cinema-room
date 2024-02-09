export const FilterItemId = ({ data, choiceFilter, filter }) => {
  return (
    <ul>
      {data.map(item => (
        <li
          key={item.id}
          onClick={() => choiceFilter(item.id, item.name)}
          style={{
            backgroundColor: filter === item.id && '#be4040',
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export const FilterItemParam = ({ data, choiceFilter, filter }) => {
  return (
    <ul>
      {data.map(item => (
        <li
          key={item.id}
          onClick={() => choiceFilter(item.param, item.name)}
          style={{
            backgroundColor: filter === item.param && '#be4040',
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export const FilterItemParams = ({ data, choiceFilter, filter1 }) => {
  return (
    <ul>
      {data.map(item => (
        <li
          key={item.id}
          onClick={() => choiceFilter(item.param1, item.param2, item.name)}
          style={{
            backgroundColor: filter1 === item.param1 && '#be4040',
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
