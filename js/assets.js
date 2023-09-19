const headerHeight = 330;
const windowHeight = window.innerHeight;
const scrollYHeight = windowHeight - headerHeight;

new DataTable('#assets', {
    "pageLength": 25,
    scrollX: true,
    scrollY: scrollYHeight,
    // "lengthChange": false,
    // "searching": false,
    
    initComplete: function () {
        this.api()
            .columns()
            .every(function () {
                select.style.width = '100px';
                let column = this;
                let title = column.header().textContent;

                // Create input element
                let input = document.createElement('input');
                input.placeholder = title;
                column.header().replaceChildren(input);

                // Event listener for user input
                input.addEventListener('keyup', () => {
                    if (column.search() !== this.value) {
                        column.search(input.value).draw();
                    }
                });
            });

        $('thead.header__title tr th:first-child').css('width', '40px');

    }
});
