// SocialShareButtons.tsx component
import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface SocialShareButtonsProps {
  platforms: { name: string; url: string; icon: React.ReactNode }[];
  buttonSize?: "small" | "medium" | "large";
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  platforms,
  buttonSize = "medium",
}) => {
  const theme = useTheme();

  return (
    <ButtonGroup
      variant="contained"
      aria-label="social-share-buttons"
      sx={{ mt: 2, mb: 2 }}
    >
      {platforms.map(({ name, url, icon }) => (
        <Button
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          size={buttonSize}
          startIcon={icon}
          sx={{
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SocialShareButtons;
