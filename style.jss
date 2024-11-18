/* Genel Stil Ayarları */
body {
    font-family: 'PT Sans', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    color: #333;
}

h1, h4 {
    font-family: 'Kufam', cursive;
}

.container-fluid {
    padding: 0;
    margin: 0;
}

header {
    background-color: #082c2c;
    color: white;
    padding: 10px 0;
    position: sticky;
    top: 0;
    z-index: 10;
}

/* Navigation Menü */
.nav-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
}

.nav-head .logo-container {
    display: flex;
    align-items: center;
}

.nav-head .logo-container h4 {
    margin-left: 10px;
    font-size: 24px;
    color: white;
    font-weight: bold;
}

.nav-head .hamburgerIcon {
    display: none;
}

nav ul {
    display: flex;
    list-style: none;
    padding: 0;
}

nav ul .nav-item {
    margin-right: 20px;
}

nav ul .nav-item a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 10px;
}

nav ul .nav-item a:hover {
    background-color: #3498db;
    border-radius: 5px;
}

/* Main Section */
.main-body-section {
    padding: 40px;
    background-color: #fff;
    text-align: center;
}

.main-body-section .sub-head {
    font-size: 36px;
    font-weight: bold;
    color: #082c2c;
}

.main-body-text {
    font-size: 20px;
    color: #777;
}

/* About Section */
.about {
    background-color: #fff;
    padding: 20px;
    margin-top: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about-text {
    font-size: 24px;
    font-weight: bold;
    color: #082c2c;
}

.main-body-text {
    font-size: 18px;
    color: #555;
}

/* Footer */
footer {
    background-color: #082c2c;
    color: white;
    padding: 30px 0;
}

footer .info-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

footer .info-block div {
    width: 30%;
}

footer .info-block h4 {
    margin-bottom: 10px;
}

footer .social-link {
    color: white;
    text-decoration: none;
    margin-bottom: 10px;
}

footer .social-link:hover {
    color: #3498db;
}

footer .credits {
    text-align: center;
    font-size: 14px;
}

/* Button */
.btn-enq {
    background-color: #3498db;
    color: white;
    padding: 15px 30px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-enq:hover {
    background-color: #2980b9;
}

/* Sticky Sidebar for Navigation */
.sticky {
    position: sticky;
    top: 0;
    z-index: 5;
}
