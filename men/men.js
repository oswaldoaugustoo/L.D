function enviarFormulario() {
    var produto = document.getElementById("produto").value;
    var valor = parseFloat(document.getElementById("valor").value);
    var desconto = parseFloat(document.getElementById("desconto").value);
  
    // Verifica se os campos Valor e Desconto foram preenchidos corretamente
    if (isNaN(valor) || isNaN(desconto)) {
      alert("Por favor, insira um valor válido para Valor e Desconto.");
      return;
    }
  
    var valorFinal = valor - desconto;
  
    // Aqui você pode realizar alguma ação com os valores do produto, valor final e desconto,
    // como enviar para um servidor ou exibi-los em algum lugar na página.
    // Neste exemplo, apenas exibimos um alerta com os valores:
    alert("Produto: " + produto + "\nValor Final: " + valorFinal);
  }
  