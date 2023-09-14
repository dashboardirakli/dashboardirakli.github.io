function expandSidebar() {
    document.getElementById("sideBar").classList.add("show");
}

function collapseSidebar() {
    document.getElementById("sideBar").classList.remove("show");
}


new DataTable('#assets', {
    "pageLength": 25,
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



document.addEventListener("DOMContentLoaded", function () {
    // Your breadcrumb generation code here
    var currentPathname = window.location.pathname;
    var pathnameSegments = currentPathname.split('/');
    pathnameSegments = pathnameSegments.filter(function (segment) {
        return segment.trim() !== '';
    }).map(function (segment) {
        return segment.replace(/\.html$/, '');
    });

    // Get the last segment of the pathname
    var currentPage = pathnameSegments.pop();

    var breadcrumbs = [];

    breadcrumbs.push('<li class="breadcrumb-item active" aria-current="page">' + currentPage + '</li>');

    document.getElementById('breadcrumbs').innerHTML = breadcrumbs.join(' / ');
});
