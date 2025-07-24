<html>
<head>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/textStyles.css">
    <link rel="stylesheet" href="css/homepage.css"> 
</head>
<body>
    <?php include 'navbar.php'; ?>

    <!--Welcome Message-->
    <div class="welcome">
        <p class="TNR-large__black" id="welcome-message"></p>
    </div>

    <div class="journal-content">
        <div class="journal-title">
            <p class="TNR-xxlarge__black" id="journal-title__text"></p>
        </div>

        <div class="journal-dashboard">
            <!--Button Menu-->
            <div class="buttons-menu">
                <div class="newjournal button-container">
                    <div class="button-label">
                        <p class="TNR-small__black" id="newtrade-label__text">New Journal</p>
                    </div>
                </div>

                <div class="editjournal button-container">
                    <div class="button-label">
                        <p class="TNR-small__black" id="newtrade-label__text">Edit Journal</p>
                    </div>
                </div>
            </div>

            <!--Journal List-->
            <div class="journal-list"></div>
        </div>
    </div>


    <script type="module" src="js/homepage.js"></script>

    <script type="module" src="js/navbar.js"></script>
    <script type="module" src="js/generalfunctions.js"></script>
</body>
</html>
