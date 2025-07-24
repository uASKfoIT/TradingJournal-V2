<?php include 'db/connection.php'; ?>
<html>
<head>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/auth.css">
    <link rel="stylesheet" href="css/textStyles.css">
</head>
<body>
    <?php include 'navbar.php'; ?>

    <div class="auth-container">
        <div class="auth-art">
            <img id="auth-art__image">
        </div>

        <div class="auth-form">
            <form method="POST" id="login-form">
                <div class="auth-form__title">
                    <p class="TNR-xxlarge__black">Sign In</p>
                </div>

                <div class="auth-form__company-msg">
                    <p class="TNR-xxsmall__black">(Keeping life simple)</p>
                </div>

                <div class="auth-form__label">
                    <p class="TNR-large__black">Username</p>
                </div>
                <div class="auth-form__input">
                    <input type="text" id="login-username"  name="login-username" required>
                </div>

                <div class="auth-form__label">
                    <p class="TNR-large__black">Password</p>
                </div>
                <div class="auth-form__input">
                    <input type="text" id="login-password" name="login-password" required>
                </div>

                <div class="auth-form__button">
                    <p>Log In</p>
                    <input type="submit" class="hidden-submit" id="submit-btn">
                </div>

                <div class="auth-form__msgContainer">
                    <div class="auth-form__msgtxt">
                        <p class="TNR-xsmall__black">Don't have an account?</p>
                    </div>
                    <div class="auth-form__msg-link selection" data-url="register.php">
                        <p class="TNR-xsmall__organge">Register</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
    

    <script src="js/auth.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/generalfunctions.js"></script>
</body>
</html>