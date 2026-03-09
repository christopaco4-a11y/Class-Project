// Track Shipment Button
function trackPackage() {
    let trackingId = prompt("Enter your Tracking ID:");
    if (trackingId) {
        alert("Shipment " + trackingId + " is currently in transit and will arrive soon.");
    }
}

// Contact Form Submission
function submitForm() {
    alert("Thank you! Our team will contact you shortly.");
    return false;
}

// Optional: Enable dropdown click for touch devices
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(drop => {
        const link = drop.querySelector('a');
        link.addEventListener('click', function (e) {
            e.preventDefault();
            drop.classList.toggle('active');
        });
    });
});