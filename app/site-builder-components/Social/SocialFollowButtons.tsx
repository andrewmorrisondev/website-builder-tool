// SocialFollowButtons.tsx component
import React from "react";
import { IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface SocialFollowButtonsProps {
  platforms: { name: string; url: string; icon: React.ReactNode }[];
  buttonColor?: string;
  size?: "small" | "medium" | "large";
}

const SocialFollowButtons: React.FC<SocialFollowButtonsProps> = ({
  platforms,
  buttonColor,
  size = "medium",
}) => {
  const theme = useTheme();
  const defaultColor = buttonColor || theme.palette.secondary.main;

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {platforms.map(({ name, url, icon }) => (
        <IconButton
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          size={size}
          sx={{
            color: defaultColor,
            "&:hover": {
              color: theme.palette.secondary.dark,
            },
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialFollowButtons;
