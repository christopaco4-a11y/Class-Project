function trackPackage() {
    let trackingId = prompt("Enter your Tracking ID:");
    if (trackingId) {
        alert("Shipment " + trackingId + " is currently in transit and will arrive soon.");
    }
}
function submitForm() {
    alert("Thank you! Our team will contact you shortly.");
    return false;
}