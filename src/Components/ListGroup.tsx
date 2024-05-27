import { useState } from "react";

function ListGroup() {
  let Countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Russia",
    "China",
    "Japan",
    "South Korea",
    "India",
    "Australia",
    "New Zealand",
    "South Africa",
    "Egypt",
    "Nigeria",
  ];
  //  let ClickedCountry = -1 ;
  const [ClickedCountry, ChangeStatus] = useState(-1);
  // Countries = [];
  //  const h1 = "List of Different Countries";
  //   if (Countries.length === 0)
  //     return (
  //       <>
  //         <h1>{h1}</h1>
  //         <p>No List Found</p>
  //       </>
  //     );

  return (
    <>
      {/* <h1>{h1}</h1> */}
      <h1>List of Countries</h1>
      {Countries.length === 0 && <p>No List Found!</p>}
      <ul className="list-group">
        {Countries.map((Country, index) => (
          <li
            className={
              ClickedCountry === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              ChangeStatus(index);
              alert("You clicked on " + Country);
            }}
            key={Country}
          >
            {Country}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
