<html>
<head>
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/button_styles.css">
    <link rel="stylesheet" href="css/textStyles.css">


    <link rel="stylesheet" href="css/journalTrades.css">
</head>
<body>
    <?php include 'navbar.php'; ?>


    <div class="table-dashboard">
        <div class="journal-info">
            <div class="titleContainer"><p class="TNR-xxlarge__black title"></p></div>
        </div>

        <div class="buttons-container">
            <div class="filterMenu">
                <div class="small-teal__button all">
                    <p class="TNR-medium__white">ALL</p>
                </div>
                <div class="small-teal__button open">
                    <p class="TNR-medium__white">OPEN</p>
                </div>
                <div class="small-teal__button closed">
                    <p class="TNR-medium__white">CLOSED</p>
                </div>
            </div>
            <div class="addTrade">Add</div>
        </div>

        <!--Display Trades-->
        <div class="trade-list">
            <table border="1">
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Type</th>
                        <th>Equity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                <!-- No data rows yet -->
                </tbody>
            </table>
        </div>

    </div>


    <script type="module" src="js/navbar.js"></script>

    <script src="js/journalTrades.js" defer></script>
</body>
</html>