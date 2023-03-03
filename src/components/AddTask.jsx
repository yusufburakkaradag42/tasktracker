import React from "react";


const AddTask = ({ data, setData}) => {


  const handleDoubleClick = (id) => {
    setData(
      data.map((item) =>
        item.id === id
          ? {
              ...item,
              clicked: !item.clicked,
            }
          : item
      )
    );
    console.log(data)
  };

  const handleDeleteClick = (id) => {
    
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      {data.map((item) => {
        const { task, day, date, clicked, id } = item;
        return (
          <ul key={id}>
            <li className="list" onDoubleClick={() => handleDoubleClick(id)}>
              <div className="d-flex">
                <div className={clicked ? "d-none" : "script"}></div>
                <div>
                  <p
                    className={
                      clicked
                        ? " fs-4 p-1"
                        : "fs-4 text-decoration-line-through text-left"
                    }
                  >
                    {task}
                  </p>
                  <p
                    className={
                      clicked ? "m-1" : "m-1 text-decoration-line-through "
                    }
                  >
                    {day} / {date}pm
                  </p>
                </div>
              </div>

              <div className="icon " role="button" onClick={() => handleDeleteClick(id)}>
                ❌
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default AddTask;