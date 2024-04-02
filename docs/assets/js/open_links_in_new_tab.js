// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor elements within paragraph elements inside an element with the class 'md-content__inner'
    var paragraphLinks = document.querySelectorAll('.md-content__inner p a');
    
    // Iterate over each selected link element
    paragraphLinks.forEach(function(link) {
        // Set the 'target' attribute of the link to '_blank' to open it in a new tab
        link.setAttribute('target', '_blank');
        // Add the 'rel' attribute with the values 'noopener noreferrer' for security
        // 'noopener' ensures that the new tab doesn't have access to the 'window.opener' property
        // 'noreferrer' ensures that no referrer information is passed to the linked page
        link.setAttribute('rel', 'noopener noreferrer');
    });
});
