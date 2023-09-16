const headerHeight = 310;
const windowHeight = window.innerHeight;
const scrollYHeight = windowHeight - headerHeight;

new DataTable('#assets', {
    "pageLength": 25,
    scrollX: true,
    scrollY: scrollYHeight,
    initComplete: function () {
        this.api()
            .columns()
            .every(function (index) {
                let column = this;

                if (index !== 0) {
                    let select = document.createElement('select');
                    select.style.width = '100px';
                    select.add(new Option(''));
                    column.header().replaceChildren(select);

                    select.addEventListener('change', function () {
                        var val = DataTable.util.escapeRegex(select.value);

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                    column
                        .data()
                        .unique()
                        .sort()
                        .each(function (d, j) {
                            select.add(new Option(d));
                        });
                }
            });

        $('thead.header__title tr th:first-child').css('width', '40px');
    }
});
