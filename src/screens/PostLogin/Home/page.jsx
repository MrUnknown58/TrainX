import React, { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../../../redux/features/theme/themeSlice";
import { getFeedThunk } from "../../../../redux/features/placeholderAPI/dummyThunk";

const Home = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  const { activeTheme } = useSelector((state) => state.theme);
  const { dummyValue } = useSelector((state) => state.dummy);
  const [name, setName] = useState([]);
  const [color, setColor] = useState("red");

  useEffect(() => {
    dispatch(getFeedThunk());
  }, []);
  return (
    <>
      <div className="text-xl bg-red-400 py-10">Hello</div>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(changeTheme(color));
        }}
      >
        Contained
      </Button>
      {name.length}
      {name.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      {value}
      {activeTheme}
      <Box>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </Box>
      {dummyValue.length}
    </>
  );
};

export default Home;
