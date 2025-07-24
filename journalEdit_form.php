<html>
<head>
    <link rel="stylesheet" href="css/textStyles.css">
    <link rel="stylesheet" href="css/form_styles.css">
    <link rel="stylesheet" href="css/button_styles.css">
    <link rel="stylesheet" href="css/textStyles.css">
    <link rel="stylesheet" href="css/form_styles.css">
    <link rel="stylesheet" href="css/button_styles.css">
    
    <link rel="stylesheet" href="css/journalEdit_form.css">
</head>
<body>
    <div class="journalUP-container">
        <!--Journal List-->
        <div class="journalList journalDashboard">    

        </div>

        <!--Journal Form-->
        <div class="off form">
            <div class="small-label">
                <p class="TNR-medium__black">Name</p>
            </div>
            <div class="small-input">
                <input class="form__journal-name" type="text">
            </div>

            <div class="small-label">
                <p class="TNR-medium__black">Color</p>
            </div>
            <div class="small-input">
                <input class="form__journal-color" type="color" id="favcolor" name="favcolor" value="#ff0000">
            </div>

            <div class="journal-buttons">
                <div class="xsmall-blue__button" id="save-button">
                    <p class="TNR-small__white">Save</p>
                </div>
                <div class="xsmall-red__button" id="delete-button">
                    <p class="TNR-small__white">Delete</p>
                </div>
            </div>
        </div>

    </div>

    <script type="module" src="js/journalEdit_form.js" defer></script>
</body>
</html>
