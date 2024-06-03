document.addEventListener('DOMContentLoaded', function() {
    function navigateToPage(pageUrl) {
        window.location.href = pageUrl;
    }

    document.getElementById('QP-button').addEventListener('click', function() {
        navigateToPage('Pricing_Quantity_Page.Html');
    });

    document.getElementById('CS-button').addEventListener('click',function() {
        navigateToPage('Product_Page.html');
    });

    document.querySelector(".logo").addEventListener("click", function() {
        navigateToPage('Homepage.html');
    });
});