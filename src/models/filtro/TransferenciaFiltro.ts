import { TipoTransferencia } from "../enums/TipoTransferencia";

export default class TransferenciaFiltro {

  dataInicio!: Date | null;
  dataFim!: Date | null;
  valor!: number | null;
  tipoTransferencia!: TipoTransferencia | null;
  nomeOperadorTransacao!: string | null;

}