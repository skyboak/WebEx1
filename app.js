const header = document.querySelector('h1')
const app = document.getElementById('app')
const ddMenu = document.querySelector('#ddMenu')
const sandwitch = document.querySelectorAll('svg')
const html = document.documentElement

const toggle = () => html.classList.toggle('dark')

const setView = (v) => {
    header.innerText = v
    //toggleMenu(true)

    if (v === 'Calculator') {
        renderCalculator()
    } else if (v === 'About') {
        console.log('About')
        renderAbout()
    } else if (v === 'Contact') {
        console.log('Contact')

        renderContact()
    }
}

const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden')
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden')
        })
    } else {
        ddMenu.classList.add('hidden')
        document.querySelectorAll('svg')[0].classList.remove('hidden')
        document.querySelectorAll('svg')[1].classList.add('hidden')
    }
}

const addRow = (container, content) => {
    const row = `<div class='grid grid-cols-5 gap-2'>${content}</div>`
    container.insertAdjacentHTML('beforeend', row)
}

const addMonitor = (container, text) => {
    const t = text ?? ''
    const monitor = `<div id='monitor' class="bg-white border-4 border-blue-400 h-20 flex items-center col-span-5 text-blue-800 p-2 rounded-lg mb-2 font-bold text-4xl">${t}</div>`
    container.insertAdjacentHTML('beforeend', monitor)
}

const button = (text) => {
    const c = text === 'calculate' ? 'col-span-4' : ''
    return `<div class='bg-blue-400 hover:bg-blue-600 text-white ${c} py-1 rounded-md text-center text-lg font-bold cursor-pointer d-btn'>${text}</div>`
}

const addButtons = (container, nums) => {
    const btnHTML = nums.map((n) => button(n)).join('')
    addRow(container, btnHTML)
}

const menu = () => {
    return `<div class="justify-start gap-4 flex">
                <button class="text-white bg-blue-500 px-2 py-1 rounded" id="calculatorBtn">Calculator</button>
                <button class="text-white bg-blue-500 px-2 py-1 rounded" id="aboutBtn">About</button>
                <button class="text-white bg-blue-500 px-2 py-1 rounded" id="contactBtn">Contact</button>
            </div>`;
};
const darkButton = () => {
    return `<div class="justify-start gap-4 flex">
                <button class="text-white bg-blue-500 px-2 py-1 rounded" id="themeToggleBtn">Toggle Theme</button>
            </div>`;
};


const addMenu = (container) => {
    container.innerHTML = menu();
    document.getElementById('calculatorBtn').addEventListener('click', () => setView('Calculator'));
    document.getElementById('aboutBtn').addEventListener('click', () => setView('About'));
    document.getElementById('contactBtn').addEventListener('click', () => setView('Contact'));
    
};
const addDarkButton = (container) => {
    container.innerHTML = darkButton();
    document.getElementById('themeToggleBtn').addEventListener('click', toggle);
    
};


const click = (event) => {
    const monitor = document.getElementById('monitor')
    const bac = monitor.innerText.trim()
    const a = event.target.innerText
    console.log(a)
    if (a === 'clear') {
        monitor.innerText = ''
    } else if (a === 'calculate') {
        monitor.innerText = bac + '=' + eval(bac)
    } else {
        monitor.innerText += a
    }
}

const renderCalculator = () => {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear',]
    app.innerHTML = ''
    addMonitor(app)
    addButtons(app, labels)
    const buttons = document.querySelectorAll('.d-btn')
    buttons.forEach((el) => el.addEventListener('click', click))
}

const renderAbout = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for About</div>'
}

const renderContact = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>'
}


const renderMenu = () => {
    let menuContainer = document.getElementById('menuContainer');
    if (!menuContainer) {
        menuContainer = document.createElement('div');
        menuContainer.id = 'menuContainer';
        document.getElementById('topMenu').appendChild(menuContainer);
    }
    addMenu(menuContainer);
};

const renderThemeToggle = () => {
    let darkButtonContainer = document.getElementById('darkButtonContainer');
    if (!darkButtonContainer) {
        darkButtonContainer = document.createElement('div');
        darkButtonContainer.id = 'darkButtonContainer';
        document.getElementById('topMenu').appendChild(darkButtonContainer);
    }
    addDarkButton(darkButtonContainer);
}

renderMenu()
renderThemeToggle()
renderCalculator()

