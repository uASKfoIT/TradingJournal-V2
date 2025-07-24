<?php
    $source = $_GET['source'] ?? 'unknown';
?>
<html>
<head>
    <link rel="stylesheet" href="css/form_styles.css">
    <link rel="stylesheet" href="css/textStyles.css">
    <link rel="stylesheet" href="css/button_styles.css">

    <link rel="stylesheet" href="css/trade_form.css">
</head>

<body>
    <div class="form-container">
        <!--Form Menu Buttons-->
        <div class="form__menu-buttons">
            <div class="button-selected menu-button" id="simpleform">
                <p>Simple</p>
            </div>
            <div class="button menu-button" id="advanceform">
                <p>Advance</p>
            </div>
        </div>

        <!--Essential Form-->
        <div class="essential-fields">
            <div class="input-row">
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Ticker:</p>
                    </div>
                    <div class="small-static-input stock-search" >
                        <p class="TNR-small__black" id="stock-ticker">Search Stock</p>
                    </div>
                </div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Trade Type:</p>
                    </div>
                    <div class="small-input">
                        <select class="dropdown-menu" id="trade-fields"></select>
                    </div>
                </div>
            </div>

            <div class="input-row">
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Entry Price:</p>
                    </div>
                    <div class="small-input">
                        <input type="number" step="0.01" id="entry_price">
                    </div>
                </div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Exit Price:</p>
                    </div>
                    <div class="small-input">
                        <input type="number" step="0.01" id="exit_price">
                    </div>
                </div>
            </div>
        </div>

        <!--Option Fields-->
        <div class="off option">
            <div class="input-row">
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Contract Type:</p>
                    </div>
                    <div class="small-input">
                        <select class="dropdown-menu" id="contract-fields"></select>
                    </div>
                </div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Contracts:</p>
                    </div>
                    <div class="small-input">
                        <input type="number" step="1" id="contract_amount">
                    </div>
                </div>
            </div>

            <div class="input-row">
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Strike:</p>
                    </div>
                    <div class="small-input">
                        <input type="number" step="0.50" id="stike_price">
                    </div>
                </div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Experation Date:</p>
                    </div>
                    <div class="small-input">
                        <input type="date" id="experation_date">
                    </div>
                </div>
            </div>
        </div>

        <!--Share Fields-->
        <div class="off share">
            <div class="input-row">
                <div class="input-row__container"></div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Shares:</p>
                    </div>
                    <div class="small-input">
                        <input type="number" step="0.01" id="shares_amount">
                    </div>
                </div>
            </div>
        </div>

        <!--Advance Fields-->
        <div class="off advance">
            <div class="input-row">
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Entry Note:</p>
                    </div>
                    <div class="small-input">
                        <input type="text" id="entry_note">
                    </div>
                </div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Exit Note:</p>
                    </div>
                    <div class="small-input">
                        <input type="text" id="exit_note">
                    </div>
                </div>
            </div>
            <div class="input-row">
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Entry Date:</p>
                    </div>
                    <div class="small-input">
                        <input type="date" id="entry_date">
                    </div>
                </div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Exit Date:</p>
                    </div>
                    <div class="small-input">
                        <input type="date" id="exit_date">
                    </div>
                </div>
            </div>
            <div class="input-row">
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Entry Chart:</p>
                    </div>
                    <div class="small-input">
                        <input type="text" id="entry_chart">
                    </div>
                </div>
                <div class="input-row__container">
                    <div class="xsmall-label">
                        <p class="TNR-medium__black">Exit Chart:</p>
                    </div>
                    <div class="small-input">
                        <input type="text" id="exit_chart">
                    </div>
                </div>
            </div>
        </div>

        <!--Action Buttons-->
        <div class="form__action-buttons">
            <div class="small-blue__button" id="save/post-button">
                <p class="TNR-small__white">Post</p>
            </div>
            <div class="small-red__button" id="delete/clear-button">
                <p class="TNR-small__white">Clear</p>
            </div>
        </div>
    </div>

    <script src="js/trade_form.js"></script>
</body>
</html>