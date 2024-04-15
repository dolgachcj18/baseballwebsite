
<script>
window.onload = function() {
    // Define the poolData for Amazon Cognito
    var poolData = {
        UserPoolId: 'us-east-2_3UU1rk0IH',
        ClientId: '4gps9mrt82harj0pmkl4fjqcm2'
    };

    // Get the modal
    var modal = document.getElementById('loginModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the page loads, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
