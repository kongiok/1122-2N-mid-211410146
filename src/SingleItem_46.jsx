const SingleItem_46 = ({ item }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isdone}
        onChange={() => console.log('edit task')}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isdone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => console.log('delete task')}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem_46;
