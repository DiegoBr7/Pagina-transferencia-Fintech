$(document).ready(function() {
    $('#continuar').click(function() {
        $('#tela1').addClass('d-none');
        $('#tela2').removeClass('d-none');
    });

    $('#transferir').click(function() {
        alert('Transferência realizada com sucesso!');
    });

    $('.keyboard .btn').click(function() {
        var valor = $('#valor').val();
        var tecla = $(this).text().trim();
        if (tecla === 'X') {
            $('#valor').val(valor.slice(0, -1));
        } else {
            $('#valor').val(valor + tecla);
        }
    });
});
