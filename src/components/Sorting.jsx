const Sorting = ({ sortingAttribute, setSortingAttribute, sortingOrder, setSortingOrder }) => {
    const availableSortingAttributes = ['created_at', 'title', 'author', 'votes'];
  
    const handleSortChange = (newSortingAttribute) => {
      if (newSortingAttribute === sortingAttribute) {
        setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
      } else {
        setSortingAttribute(newSortingAttribute);
      }
    };
  
    return (
      <div className='sorting'>
        <ul className='sorting__list'>
          {availableSortingAttributes.map((attribute) => {
            return (
              <li
                key={attribute}
                className={
                  sortingAttribute === attribute ? 'sorting__list__element--activated'
                    : 'sorting__list__element--deactivated'
                }
                onClick={() => handleSortChange(attribute)}
              >
                {attribute === 'created_at' ? 'date' 
                    : attribute === 'author' ? 'user'
                     : attribute}
                {sortingOrder === 'desc' && sortingAttribute === attribute ? '▼'
                  : sortingOrder === 'asc' && sortingAttribute === attribute ? '▲'
                    : null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default Sorting;