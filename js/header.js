var content = `
<section style="background-color: white; padding-bottom: 5px; box-shadow: 0 50px 50px rgba(0, 0, 0, 0.14);" class="sticky-top">
        <a class="navbar-brand" href="#">
                <img src="logo.png" width="200px" alt="softnerve logo" style=" margin-left: 100px;">
            </a>
        <nav class="navbar navbar-expand-sm justify-content-center">
            
            <ul class="navbar-nav" style="margin-top: 8px;">
                <li class="nav-item">
                    <a href="index.html" class="hvr-overline-from-left button nav-link">Home <div class="fa fa-home"></div></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link hvr-overline-from-left button" href="#" id="navbardrop"
                        data-toggle="dropdown">
                        Products <div class="fa fa-chevron-down"></div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right square">
                        <a class="dropdown-item" href="company.html">Company Overview</a>
                        <a class="dropdown-item" href="managment.html">Management and Team</a>
                        <a class="dropdown-item" href="recognition.html">Awards and Recognitions</a>
                        <a class="dropdown-item" href="company.html">Company Overview</a><div class="divider"></div>
                        <a class="dropdown-item" href="managment.html">Management and Team</a>
                        <a class="dropdown-item" href="recognition.html">Awards and Recognitions</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link hvr-overline-from-left button" id="navbardrop" data-toggle="dropdown">Solutions <div class="fa fa-chevron-down"></div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right square">
                        <a class="dropdown-item" href="company.html">Company Overview</a>
                        <a class="dropdown-item" href="managment.html">Management and Team</a>
                        <a class="dropdown-item" href="recognition.html">Awards and Recognitions</a>
                        <a class="dropdown-item" href="company.html">Company Overview</a><div class="divider"></div>
                        <a class="dropdown-item" href="managment.html">Management and Team</a>
                        <a class="dropdown-item" href="recognition.html">Awards and Recognitions</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link hvr-overline-from-left button" href="forpartner.html">For Partners <div class="fa fa-user-plus"></div></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link hvr-overline-from-left button" href="ContactUs.html">Contact Us <div class="fa fa-phone"></div></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link hvr-overline-from-left button" href="#" id="navbardrop"
                        data-toggle="dropdown">
                        About Us <div class="fa fa-chevron-down"></div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right square">
                        <a class="dropdown-item" href="company.html">Company Overview</a>
                        <a class="dropdown-item" href="managment.html">Management and Team</a>
                        <a class="dropdown-item" href="recognition.html">Awards and Recognitions</a>
                        <a class="dropdown-item" href="company.html">Company Overview</a><div class="divider"></div>
                        <a class="dropdown-item" href="managment.html">Management and Team</a>
                        <a class="dropdown-item" href="recognition.html">Awards and Recognitions</a>

                    </div>
                </li>
            </ul>
        </nav>
    </section>

`;
document.querySelector("header").innerHTML = content;