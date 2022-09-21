import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from "@mui/material";
import { RiContactsFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { BsInfoLg } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";

export const TableList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Origem</TableCell>
            <TableCell>Nome</TableCell>

            <TableCell>Telefone</TableCell>
            <TableCell>Vendedor</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>17/09/2022</TableCell>
            <TableCell>Origem leads</TableCell>
            <TableCell>Nome lead</TableCell>
            <TableCell>(11) 99900-0009</TableCell>
            <TableCell>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <RiEyeFill size={18} style={{ marginRight: 5 }} /> Vendedor
              </Typography>
            </TableCell>
            <TableCell>Cadastrado</TableCell>
            <TableCell align="right">
              <IconButton aria-label="delete">
                <RiContactsFill size={22} />
              </IconButton>
              <IconButton aria-label="delete">
                <FaDollarSign size={21} />
              </IconButton>
              <IconButton aria-label="delete">
                <BsInfoLg size={21} />
              </IconButton>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>17/09/2022</TableCell>
            <TableCell>Origem leads</TableCell>
            <TableCell>Nome lead</TableCell>
            <TableCell>(11) 99900-0009</TableCell>

            <TableCell>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <RiEyeOffFill size={18} style={{ marginRight: 5 }} /> Vendedor
              </Typography>
            </TableCell>
            <TableCell>Vendido</TableCell>
            <TableCell align="right">
              <IconButton aria-label="delete">
                <RiContactsFill size={22} />
              </IconButton>
              <IconButton aria-label="delete">
                <FaDollarSign size={21} />
              </IconButton>
              <IconButton aria-label="delete">
                <BsInfoLg size={21} />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
