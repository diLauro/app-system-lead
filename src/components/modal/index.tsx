import { Button, Grid, Modal, Paper } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
  buttons?: JSX.Element[];
};
export const ModalSimple = ({ open, setOpen, children, buttons }: Props) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ maxWidth: "620px", width: "80%", padding: 2 }}>
        {children}

        <Grid container>
          <Grid
            item
            paddingTop={3}
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
          >
            <>
              {buttons?.map((btn) => (
                <>{btn}</>
              ))}
            </>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              Fechar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};
