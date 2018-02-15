$(function () {
    $('.js-basic-example').DataTable({
        responsive: true,
        searching: false,
        sort : false,
        lengthChange: false,
        pageLength: 2
    });
    

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});
