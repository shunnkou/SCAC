document.addEventListener('DOMContentLoaded', function() {
    // Select all links within the body text
    var bodyLinks = document.querySelectorAll('.markdown a');
    
    // Loop through each body link and add the target attribute
    bodyLinks.forEach(function(link) {
        link.setAttribute('target', '_blank');
    });
});
