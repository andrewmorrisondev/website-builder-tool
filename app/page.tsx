"use client";
import "./globals.css";
import { SpeedDialMenu } from "./site-builder-components/registry";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Home = (): JSX.Element => {
  const actions = [
    { icon: <EditIcon />, name: "Edit", onClick: () => console.log("Edit") },
    {
      icon: <DeleteIcon />,
      name: "Delete",
      onClick: () => console.log("Delete"),
    },
  ];

  return (
    <>
      <SpeedDialMenu actions={actions} />
    </>
  );
};

export default Home;
