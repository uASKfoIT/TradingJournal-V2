<html>
<head>
    <link rel="stylesheet" href="css/textStyles.css">
    <link rel="stylesheet" href="css/form_styles.css">
    <link rel="stylesheet" href="css/button_styles.css">
    <link rel="stylesheet" href="css/textStyles.css">

    <link rel="stylesheet" href="css/newjournal_form.css">
</head>
<body>
    <div class="newjournal">
        <h5 id="alert-message"></h5>
        <!--Journal Name-->
        <div class="medium-label">
            <p class="TNR-large__black">Name</p>
        </div>
        <div class="medium-input">
            <input id="journal-name" type="text">
        </div>

        <!--Journal Color-->
        <div class="medium-label">
            <p class="TNR-large__black">Color</p>
        </div>
        <div class="medium-input">
            <input id="journal-color" type="color" name="favcolor" value="#ff0000">
        </div>

        <!--Journal Buttons-->
        <div class="journal-buttons">
            <div class="small-red__button" id="cancel-button">
                <p class="TNR-small__white">Cancel</p>
            </div>
            <div class="small-blue__button" id="create-button">
                <p class="TNR-small__white">Create</p>
            </div>
        </div>
    </div>

    <script type="module" src="js/newjournal_form.js" defer></script>
</body>
</html>