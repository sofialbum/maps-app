import { ChangeEvent, useRef } from 'react';


export const SearchBar = () => {

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
    if ( debounceRef.current )
      clearTimeout( debounceRef.current );

    debounceRef.current = setTimeout(() => {
      // TODO: buscar o ejecutar consulta
      console.log('debounced value:', event.target.value);
    }, 350 );
  }


  return (
    <div className="search-container">
      <input type="search" className="form-control" placeholder="Buscar lugar..." onChange={ onQueryChanged }/>
      
    </div>
  )
}


