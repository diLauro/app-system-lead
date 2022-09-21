import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useRequest } from "../../hook/useRequest";
import { ModalSimple } from "../modal";

type FormRequest = {
  name: string;
};

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleIncluir?: Function;
};
export const FormMidia = ({
  openModal,
  setOpenModal,
  handleIncluir,
}: Props) => {
  const [formRequest, setFormRequest] = useState<FormRequest | null>(null);

  const { setSend, saving } = useRequest("midias", formRequest);

  const handleIncluirMidia = () => {
    setSend(true);
  };

  useEffect(() => {
    if (!saving && formRequest) {
      handleIncluir && handleIncluir();
      setFormRequest(null);
    }
  }, [saving]);

  const button = [
    <Button key="btn-incluir-midia" onClick={() => handleIncluirMidia()}>
      Incluir
    </Button>,
  ];

  return (
    <ModalSimple open={openModal} setOpen={setOpenModal} buttons={button}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Incluir mídia</Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={formRequest?.name ? formRequest?.name : ""}
            onChange={(e) => setFormRequest({ name: e.target.value })}
            variant="outlined"
            size="small"
            label="Nome da mídia"
            color="warning"
            fullWidth
          />
        </Grid>
      </Grid>
    </ModalSimple>
  );
};
