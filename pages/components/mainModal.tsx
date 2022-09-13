import { Button, CardMedia, Container, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MainModal({ asset }: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>
        <CardMedia
          component="img"
          image={asset.photoUrl}
          sx={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            objectFit: "scale-down",
          }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <CardMedia
            component="img"
            image={asset.photoUrl}
            sx={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              objectFit: "scale-down",
            }}
          />
          <Container>
            <CardMedia
              component="img"
              image={asset.photoUrl}
              sx={{
                height: "200px",
                display: "flex",
                justifyContent: "center",
                objectFit: "scale-down",
              }}
            />
          </Container>
          <Container>
            <Container>하이</Container>
            <Container></Container>
          </Container>
        </Box>
      </Modal>
    </>
  );
}
