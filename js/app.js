function expandSidebar() {
    document.getElementById("sideBar").classList.add("show");
}

function collapseSidebar() {
    document.getElementById("sideBar").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
    var currentPathname = window.location.pathname;
    var pathnameSegments = currentPathname.split('/');
    pathnameSegments = pathnameSegments.filter(function (segment) {
        return segment.trim() !== '';
    }).map(function (segment) {
        return segment.replace(/\.html$/, '');
    });

    var currentPage = pathnameSegments.pop();

    var breadcrumbs = [];

    breadcrumbs.push('<li class="breadcrumb-item active" aria-current="page">' + currentPage + '</li>');

    document.getElementById('breadcrumbs').innerHTML = breadcrumbs.join(' / ');
});

