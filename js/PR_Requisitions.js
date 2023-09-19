const headerHeight = 330;
const windowHeight = window.innerHeight;
const scrollYHeight = windowHeight - headerHeight;

new DataTable('#prRequsitions', {
    "pageLength": 25,
    scrollX: true,
    scrollY: scrollYHeight,
    // "lengthChange": false,
    // "searching": false,
    
    // initComplete: function () {
    //     this.api()
    //         .columns()
    //         .every(function () {
    //             select.style.width = '100px';
    //             let column = this;
    //             let title = column.header().textContent;

    //             // Create input element
    //             let input = document.createElement('input');
    //             input.placeholder = title;
    //             column.header().replaceChildren(input);

    //             // Event listener for user input
    //             input.addEventListener('keyup', () => {
    //                 if (column.search() !== this.value) {
    //                     column.search(input.value).draw();
    //                 }
    //             });
    //         });

    //     $('thead.header__title tr th:first-child').css('width', '40px');

    // }
});


new DataTable('#partRequisition', {
    scrollX: true,
    "lengthChange": false,
    "searching": false,
    info: false,
    ordering: false,
    paging: false
});

new DataTable('#newpartRequisition', {
    scrollX: true,
    "lengthChange": false,
    "searching": false,
    info: false,
    ordering: false,
    paging: false
});


//textera menu for new requsition
tinymce.init({
    selector: 'textarea#newDetailedDescription',
    width: '100%',
    height: 300,
    plugins:[
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'prewiew', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 
        'table', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' + 
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons',
    // menu: {
    //     favs: {title: 'menu', items: 'code visualaid | searchreplace | emoticons'}
    // },
    // menubar: 'favs file edit view insert format tools table',
    menubar: false,
    content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}'
});