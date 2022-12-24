import { axiosClient } from '../http-common';
import Transferencia from '../models/Transferencia';
import { AxiosResponse } from 'axios';
import Pageable from '../models/utils/Pageable';
import Page from '../models/utils/Page';
import TransferenciaFiltro from '../models/filtro/TransferenciaFiltro';

export default class TransferenciaService {
  private urlApi = `/transferencias`;

  async listarTransferencias(page: Pageable, filtro: TransferenciaFiltro): Promise<AxiosResponse<Page<Transferencia>>> {
    const urlFiltro = `dataInicio=${filtro.dataInicio}&
                        dataFim=${filtro.dataFim}&
                        valor=${filtro.valor}&
                        tipoTransferencia=${filtro.tipoTransferencia}&
                        nomeOperadorTransacao=${filtro.nomeOperadorTransacao}&`;
    const url = `${urlFiltro}size=${page.pageSize}&page=${page.page}&sort=${page.sortField},${page.sortOrder}`;
    return await axiosClient.get(`${this.urlApi}?${url}`);
  }
}