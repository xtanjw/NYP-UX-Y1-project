// hdi stands for header-dropdown-item

const headerHTML = `
        <div id="header">
            <button class="header-button" id="header-logo">
                <img src="resources/HobbiesAndSuchLogo.png">
            </button>
            <div id="header-shiva">
                <button class="header-button header-tab" id="header-button-shiva">
                    <img src="resources/shivaCutout.png"><p>Shiva</p>
                </button>
                <a class="header-button hdi" id="hdi-cycling" href="cycling.html">
                    CYCLING
                </a>
                <a class="header-button hdi" id="hdi-minecraft" href="minecraft.html">
                    MINECRAFT
                </a>
            </div>
        </div>
`

const body = document.body
body.insertAdjacentHTML("beforeend", headerHTML)

/**
 * 
 * <div class="header-dropdown" id="header-dropdown-shiva">
                <button class="header-button hdi" id="hdi-cycling">
                    CYCLING
                </button>
                <button class="header-button hdi" id="hdi-minecraft">
                    MINECRAFT
                </button>
                </div>
 */