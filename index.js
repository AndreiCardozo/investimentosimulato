$("#calcular").click((event) => {
    event.preventDefault();
    let empresa = $("#empresa").find(":selected").text();
    let acao = $("#acao").val();
    let valor = $("#valor").find(":selected").text();
    let quantidade = $("#quantidade").val();
    let total = $("#total").val();
    let vender = $("#vender").val();

    let rowId = parseInt($("tbody th:last").text()) + 1;

    let registro = `
        <tr style="display: none;">
            <th scope="row">${rowId}</th>
            <td>${tipoInvest}</td>
            <td>${juros}% ${tipoJuros}</td>
            <td>R$${capital}</td>
            <td>${periodo} meses</td>
            <td>R$${montante}</td>
            <td>${ir * 100}%</td>
            <td>R$${lucroLiq}</td>
        </tr>
    `;

    $(".registros").append(registro);

});

