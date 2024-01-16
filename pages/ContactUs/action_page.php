<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];;
    $user_message = $_POST["user_message"];

    // Check if required fields have values
    if (!empty($fullName) && !empty($user_message)) {
        // Successful submission, redirect to homepage
        alert("SUCCESSFUL");
        header("Location: ./index.tsx"); // Replace with the actual URL of your homepage
        exit();
    } else {
        // Failed submission, reload the current page
        alert("FAILED");
        header("Location: " . $_SERVER["HTTP_REFERER"]);
        exit();
    }
} else {
    // If the form is not submitted via POST, handle accordingly
    echo "Invalid request method.";
}
?>
