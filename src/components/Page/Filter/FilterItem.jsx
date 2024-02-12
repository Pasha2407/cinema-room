export const FilterItemParam = ({
  header,
  filterName,
  deleteFilter,
  setFilterName,
  setFilter,
  data,
  choiceFilter,
  filter,
}) => {
  return (
    <div>
      <header>
        <h2>{header}</h2>
        {filterName && (
          <span>
            {filterName}
            <button onClick={() => deleteFilter(setFilterName, setFilter)}>
              X
            </button>
          </span>
        )}
      </header>
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
    </div>
  );
};

export const FilterItemParams = ({
  header,
  filterName,
  deleteFilter,
  setFilterName,
  setFilter1,
  setFilter2,
  data,
  choiceFilter,
  filter,
}) => {
  return (
    <div>
      <header>
        <h2>{header}</h2>
        {filterName && (
          <span>
            {filterName}
            <button
              onClick={() =>
                deleteFilter(setFilterName, setFilter1, setFilter2)
              }
            >
              X
            </button>
          </span>
        )}
      </header>
      <ul>
        {data.map(item => (
          <li
            key={item.id}
            onClick={() => choiceFilter(item.param1, item.param2, item.name)}
            style={{
              backgroundColor: filter === item.param1 && '#be4040',
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
