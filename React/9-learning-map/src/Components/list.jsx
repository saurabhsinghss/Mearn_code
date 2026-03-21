const List = ({ list }) => {
  // conditional rendering----

  return (
    
    <>
      {!list || list.length === 0 ? <h2>No Students are here.</h2>
        : <h2>Here are the students</h2>}

      {list && list.length > 0 && <ol className="list-decimal ml-5 mt-4">
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ol>}

   
      {/* without map */}
       {/* <ol className="list-decimal ml-5 mt-4">
        {[<li>Saurabh</li>,<li>Aroma</li>,<li>Satyam</li>,<li>Ram</li>,<li>Shyam</li>]}
      </ol> */}
    </>
  );
};
export default List;
