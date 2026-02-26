const container = document.getElementById('canvas-container');

const phrases = [
    "Fuck AI",
    "F*ck AI",
	"F🤖ck AI",
	"💥🤖",
	"join mastodon",
	"chatgpt kills",
    "01000110 01010101 01000011 01001011 00100000 01000001 01001001", 
    "46 55 43 4B 20 41 49", 
    "console.log('Fuck AI');",
    "print('Fuck AI')",
    "def ai(): return 'Fuck'",
    "🖕 AI",
    "System.out.println('Fuck AI');",
    "Error 404: AI Not Wanted",
	"don't let creativity die",
	"say no to AI!",
	"stop lobotomizing grok",
	"rip aaron swartz",
	"clanker",
	"piss tint hater",
	"chatgpt steals"
];

// Your custom color palette
const colors = [
    '#FF0000', '#6F003C', '#004B5B', '#00B19C', 
    '#8100A1', '#D675D8', '#2E4FC4', '#D4D4FF'
];

function createFloatingText() {
    const el = document.createElement('div');
    el.classList.add('text-element');
    
    el.innerText = phrases[Math.floor(Math.random() * phrases.length)];
    
    // Selects a random color from your new list
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = color;
    el.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`; 
    
    el.style.fontSize = Math.random() * 3 + 1 + 'rem';

    el.style.setProperty('--startX', `${Math.random() * 200 - 50}vw`);
    el.style.setProperty('--startY', `${Math.random() * 200 - 50}vh`);
    el.style.setProperty('--startZ', `${Math.random() * -2000}px`); 
    
    el.style.setProperty('--endX', `${Math.random() * 200 - 50}vw`);
    el.style.setProperty('--endY', `${Math.random() * 200 - 50}vh`);
    el.style.setProperty('--endZ', `${Math.random() * 1500 + 500}px`); 

    el.style.setProperty('--rotX', `${Math.random() * 360}deg`);
    el.style.setProperty('--rotY', `${Math.random() * 360}deg`);
    el.style.setProperty('--rotZ', `${Math.random() * 360}deg`);

    const duration = Math.random() * 10 + 6;
    el.style.animationDuration = `${duration}s`;
    
    container.appendChild(el);

    setTimeout(() => {
        el.remove();
        createFloatingText();
    }, duration * 1000);
}

for(let i = 0; i < 60; i++) {
    setTimeout(createFloatingText, Math.random() * 5000);
}

// Optional: Make the center text cycle through your colors
const centerText = document.getElementById('center-text');
setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    centerText.style.color = randomColor;
    centerText.style.textShadow = `0 0 20px ${randomColor}, 0 0 50px ${randomColor}`;
}, 2000); // Changes color every 2 seconds