import Select from 'react-select';
import { filterSelectStyles } from 'service/filterSelectStyles';

export const FilterItem = ({
  header,
  placeholder,
  data,
  choiceFilter,
  filterName,
}) => {
  const handleChangeFilter = event => {
    if (event) {
      choiceFilter(event.value, event.value2, event.label);
      return;
    }
    choiceFilter('', '', '');
  };

  const filterOptions = data?.map(item => {
    const option = {
      value: `${item.param}`,
      value2: `${item.param2}`,
      label: `${item.name}`,
    };
    return option;
  });

  const searchParamOption = filterOptions.find(
    option => option.label === filterName
  );

  return (
    <div>
      <h2>{header}</h2>
      <Select
        options={filterOptions}
        placeholder={placeholder}
        isClearable={true}
        onChange={handleChangeFilter}
        styles={filterSelectStyles}
        value={searchParamOption}
      ></Select>
    </div>
  );
};
