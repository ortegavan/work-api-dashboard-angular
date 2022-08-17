export interface Dashboard {
    ativo: boolean;
    onlineDesde: string;
    requests: {
        tempoMinimo: number,
        tempoMedio: number,
        tempoMaximo: number,
        porCliente: [
            {
                descricao: string,
                quantidade: number
            }
        ]
    };
    grafico: [[]]
}