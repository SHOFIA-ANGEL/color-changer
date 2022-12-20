import React from "react";
import "./styles.css";

const App = () => { 
  const options = [
    {
      label: "lime",
      value: "lime"
    },

    { label: "lavender", 
      value: "lavender" },

    {
      label: "crimson",
      value: "crimson"
    },

    { label: "darkblue", value: "darkblue" },

    { label: "teal", value: "teal" }
  ];

  const [value, setValue] = React.useState("lime");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
      <div><div className="head"><center><bold>
        Color changer</bold></center></div>
      <select
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: value, width: 270 }}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <div className="border"
        style={{
          marginTop: 100,
          marginLeft: 300,
          width: 450,
          height: 150,
          backgroundColor: value
        }}
      />
    </div>
  );
};

export default App;
