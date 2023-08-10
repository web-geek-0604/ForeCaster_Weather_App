import {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({onSearchChange}) => {

  const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '5px',
        backgroundColor: '#ededed',
        color: 'white',
        boxShadow: state.isFocused ? 'white' : null,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? 'darkgray' : null,
        color: state.isFocused ? 'white' : null,
        color: provided.isFocused ? 'white' : null,
    }),
}
  
  
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=100&namePrefix=${inputValue}`, geoApiOptions
        )
        .then(response => response.json())
        .then(response => {
          return {
            options: response.data.map((city) =>{
              return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name} ${city.countryCode}`,
              }
            })
          }
        })
        .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

  return (<div className='p-5'>
    <AsyncPaginate
        placeholder="Search for location"
        debounceTimeout={600}
        value={search}
        styles={customStyles}
        onChange={handleOnChange}
        loadOptions={loadOptions}    
    />
    </div>
  )
}

export default Search;