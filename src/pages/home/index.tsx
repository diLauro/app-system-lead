import {
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BiTask } from "react-icons/bi";
import { FaRetweet, FaTable } from "react-icons/fa";
import { RiDashboard3Line, RiEyeOffFill, RiUserAddFill } from "react-icons/ri";
import { TbArrowBigLeft, TbArrowBigRight, TbFilterOff } from "react-icons/tb";
import { DashboardLead } from "../../components/DashboardLead";
import { FormDomain } from "../../components/FormDomain";
import { FormLead } from "../../components/FormLead";
import { FormMidia } from "../../components/FormMidia";
import { ModalSimple } from "../../components/modal";
import { TableList } from "../../components/TableList";
import { useFetchAll } from "../../hook/FetchAll";
import { useFetchDomains } from "../../hook/FetchDomains";
import { Midias } from "../../types/Midas";

export const Home = () => {
  const [openModalLead, setOpenModalLead] = useState<boolean>(false);
  const [openModalMidia, setOpenModalMidia] = useState<boolean>(false);
  const [openModalDomain, setOpenModalDomain] = useState<boolean>(false);

  const { domains, setReload: setReloadDomains } = useFetchDomains([
    "SERVICE",
    "ORIGIN",
  ]);
  const { dataList, setReload } = useFetchAll<Midias[]>("midias");

  const handleOpenMidia = () => {
    setOpenModalLead(false);
    setOpenModalMidia(true);
  };

  const handleOpenDomains = () => {
    setOpenModalLead(false);
    setOpenModalDomain(true);
  };

  const handleIncluirMidia = () => {
    setReload(true);
    setOpenModalLead(true);
    setOpenModalMidia(false);
  };

  const handleIncluirDomain = () => {
    setReloadDomains(true);
    setOpenModalLead(true);
    setOpenModalDomain(false);
  };

  const teste = "[éãû testes  h98190213 [/´e[wd~sa";

  console.log(
    teste
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "")
      .toUpperCase()
  );

  return (
    <>
      <Grid container padding={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Leads</Typography>
        </Grid>
        <Grid item xs={12} paddingTop={3} alignItems="center">
          <TextField
            label="Buscar lead"
            variant="outlined"
            size="small"
            color="warning"
          />
          <Button variant="contained" sx={{ marginX: 1 }} color="warning">
            Pesquisar
          </Button>

          <Tooltip title="Voltar um dia">
            <IconButton>
              <TbArrowBigLeft size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Hoje">
            <IconButton>
              <TbFilterOff size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Avançar um dia">
            <IconButton>
              <TbArrowBigRight size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Dashboard">
            <IconButton color="info">
              <RiDashboard3Line size={22} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Painel lead">
            <IconButton color="info">
              <FaTable size={20} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Incluir lead">
            <IconButton color="success" onClick={() => setOpenModalLead(true)}>
              <RiUserAddFill size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Trocas">
            <IconButton color="warning">
              <FaRetweet size={21} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Trocas pendentes">
            <IconButton color="error">
              <FaRetweet size={21} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filtrar">
            <IconButton>
              <BiTask size={21} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Não visualizado">
            <IconButton>
              <RiEyeOffFill size={21} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={12} paddingTop={2}>
          <TableList />
        </Grid>
      </Grid>

      <ModalSimple open={openModalLead} setOpen={setOpenModalLead}>
        <FormLead
          domains={domains}
          midia={dataList}
          setMidia={handleOpenMidia}
          setDomains={handleOpenDomains}
        />
      </ModalSimple>

      <FormMidia
        setOpenModal={setOpenModalMidia}
        openModal={openModalMidia}
        handleIncluir={handleIncluirMidia}
      />

      <FormDomain
        setOpenModal={setOpenModalDomain}
        openModal={openModalDomain}
        handleIncluir={handleIncluirDomain}
      />
    </>
  );
};
