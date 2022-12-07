import React from "react";

function Page_header(props) {
  return (
    <div className="page_header">
      <div className="container">
        <h2 className="under_line">{props.text}</h2>
      </div>
    </div>
  );
}

export default Page_header;
