// Modal.tsx component
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullScreenOnMobile?: boolean; // Option to make it fullscreen on mobile
}

/**
 * Modal component provides a reusable dialog with customizable title, content,
 * and responsive sizing options for mobile and desktop.
 *
 * @param {ModalProps} props - The props for configuring the Modal component.
 * @returns {JSX.Element} The rendered Modal component.
 */
const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  maxWidth = "md",
  fullScreenOnMobile = true, // By default, it will go fullscreen on mobile
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects if the screen is mobile-sized

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreenOnMobile && isMobile} // Make full screen on mobile if the option is enabled
      maxWidth={maxWidth}
      fullWidth={!isMobile} // For desktop, make the dialog full width within the given maxWidth
    >
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
