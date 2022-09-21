import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRequest } from "../../hook/useRequest";
import { ModalSimple } from "../modal";

type FormRequest = {
  type_domain: string;
  cod_domain: string;
  name: string;
};

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleIncluir?: Function;
};
export const FormDomain = ({
  openModal,
  setOpenModal,
  handleIncluir,
}: Props) => {
  const [formRequest, setFormRequest] = useState<FormRequest | null>(null);

  const { setSend, saving } = useRequest("domains", formRequest);

  useEffect(() => {
    if (!saving && formRequest) {
      handleIncluir && handleIncluir();
      setFormRequest(null);
    }
  }, [saving]);

  const handleSubmit = () => {
    const textName = formRequest?.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "")
      .toUpperCase()
      .split(" ");

    let textCodDomain = formRequest?.type_domain;
    textName?.forEach((text) => {
      textCodDomain = `${textCodDomain}_${text}`;
    });

    setFormRequest({
      ...formRequest,
      cod_domain: textCodDomain,
    } as FormRequest);

    setSend(true);
  };

  const button = [
    <Button key="btn-incluir-midia" onClick={() => handleSubmit()}>
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
          <FormControl fullWidth size="small" color="warning">
            <InputLabel>Mídia</InputLabel>
            <Select
              label="Tipo"
              value={formRequest?.type_domain ? formRequest?.type_domain : ""}
              onChange={(e) =>
                setFormRequest({
                  ...formRequest,
                  type_domain: e.target.value,
                } as FormRequest)
              }
            >
              <MenuItem value={""}>Selecione</MenuItem>
              <MenuItem value={"SERVICE"}>Serviços</MenuItem>
              <MenuItem value={"ORIGIN"}>Origem</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={formRequest?.name ? formRequest?.name : ""}
            onChange={(e) =>
              setFormRequest({
                ...formRequest,
                name: e.target.value,
              } as FormRequest)
            }
            variant="outlined"
            size="small"
            label="Nome"
            color="warning"
            fullWidth
          />
        </Grid>
      </Grid>
    </ModalSimple>
  );
};
