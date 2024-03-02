const setButtons = document.querySelectorAll('.wat-set-buttons a button')
const selectAlert = document.querySelector('.select-alert')
const startHeading = document.querySelector('.start h1')
const startButton = document.querySelector('.start-button')
const watContent = document.querySelector('.wat-content')
const restart = document.querySelector('.restart')
const goToTop = document.querySelector('.go-to-top')

let watWords = []

setButtons.forEach((setButton) => {
    setButton.addEventListener('click', () => {

        selectAlert.style.display = 'none'
        startHeading.style.display = 'block'
        startButton.style.display = 'block'

        console.log(setButton.textContent)

        switch (setButton.textContent) {
            case 'Set 1':
                watWords = words.slice(0, 60)
                break;
            case 'Set 2':
                watWords = words.slice(60, 120)
                break;
            case 'Set 3':
                watWords = words.slice(120, 180)
                break;
            case 'Set 4':
                watWords = words.slice(180, 240)
                break;
            case 'Set 5':
                watWords = words.slice(240, 300);
                break;
            case 'Set 6':
                watWords = words.slice(300, 360);
                break;
            case 'Set 7':
                watWords = words.slice(360, 420);
                break;
            case 'Set 8':
                watWords = words.slice(420, 480);
                break;
            // case 'Set 9':
            //     watWords = words.slice(480, 540);
            //     break;
        }
        startTest(watWords)

    })
})

function startTest(watWords) {
    startButton.addEventListener('click', () => {

        if (watWords.length === 0) {
            alert(`Please choose a set to begin.`)
            return
        }

        const startDiv = document.querySelector('.start')
        startDiv.style.display = 'none'
        displayWords()
    })
}

function displayWords() {

    watContent.style.display = 'flex'

    let watIndex = 0
    const watContentWords = document.querySelector('.wat-content p')
    watContentWords.innerHTML = watWords[watIndex]

    setInterval(() => {
        watIndex++
        // watIndex = (watIndex + 1) % watWords.length; // ?
        watContentWords.innerHTML = watWords[watIndex]
        if (watIndex === watWords.length) {
            watContent.style.display = 'none'
            restart.style.display = 'flex'
            console.log(watIndex, watWords.length)

            goToTop.addEventListener('click', () => {
                setTimeout(() => {
                    location.reload();
                }, 500)
            })

            return
        }
    }, 15000)
}

const words = [
    "Time", "Love", "Money", "Sky", "Fire", "Water", "Friend", "Fear", "Joy", "Book", "Tree", "Dream", "Sleep",
    "Music", "Work", "Family", "Hope", "Road", "Silence", "Flower", "Pain", "Strength", "Beauty", "Happiness",
    "Knowledge", "Trust", "Health", "Change", "Adventure", "Power", "Food", "Space", "Wisdom", "Success",
    "Nature", "Journey", "Dance", "Courage", "Winter", "Summer", "Laughter", "Rain", "Wind", "Mountain",
    "Ocean", "Light", "Dark", "Truth", "Lie", "Morning", "Night", "Color", "Red", "Blue", "Green", "Yellow",
    "Orange", "Purple", "Black", "White", "Mirror", "Reflection", "Anger", "Peace", "War", "Secret", "Memory",
    "Future", "Past", "Present", "Lost", "Found", "Home", "Heart", "Mind", "Soul", "Chaos", "Order", "City",
    "Country", "Forest", "Desert", "Balance", "Harmony", "Conflict", "Destination", "Discovery", "Mystery",
    "Puzzle", "Solution", "Answer", "Question", "Sun", "Moon", "Stars", "Universe", "Energy", "Liberty",
    "Prison", "Body", "Breath", "Earth", "Ice", "Heat", "Cold", "Shadow", "Image", "Reality", "Illusion",
    "Nightmare", "Despair", "Hate", "Compassion", "Cruelty", "Tears", "Smile", "Sorrow", "Birth", "Death",
    "Life", "Beginning", "Young", "Moment", "Clock", "Watch", "Distance", "Near", "Far", "Arrival",
    "Departure", "Path", "Walk", "Run", "Music", "Noise", "Peace", "Adventure", "Routine", "Revolution",
    "Evolution", "Progress", "Stagnation", "Stability", "Freedom", "Control", "Urban", "Mountain", "River",
    "Ocean", "Sunrise", "Sunset", "Morning", "Night", "Air", "Snow", "Rain", "Storm", "Calm", "Light",
    "Sun", "Star", "Planet", "Heaven", "Hell", "Angel", "Devil", "Ghost", "Mind", "Heart", "Energy",
    "Wisdom", "Foolishness", "Knowledge", "Education", "Illiteracy", "Experience", "Inexperience", "Memory",
    "Forgetfulness", "Past", "Present", "Future", "Now", "Later", "Sooner", "Yesterday", "Tomorrow", "Today",
    "Perception", "Reality", "Consciousness", "Unconsciousness", "Awareness", "Ignorance", "Focus",
    "Distraction", "Attention", "Neglect", "Interest", "Disinterest", "Curiosity", "Apathy", "Creativity",
    "Imagination", "Practicality", "Possibility", "Impossibility", "Probability", "Certainty", "Possession",
    "Loss", "Gain", "Sacrifice", "Achievement", "Failure", "Improvement", "Decline", "Growth", "Change",
    "Chaos", "Order", "Security", "Insecurity", "Safety", "Danger", "Risk", "Reward", "Punishment", "Justice",
    "Injustice", "Equality", "Inequality", "Wealth", "Poverty", "Success", "Defeat", "Victory", "Progress",
    "Regression", "Competition", "Cooperation", "Community", "Isolation", "Society", "Individual", "Group",
    "Alone", "Together", "Friendship", "Enmity", "Communication", "Miscommunication", "Agreement", "Disagreement",
    "Compromise", "Resistance", "Acceptance", "Rejection", "Fame", "Obscurity", "Reputation", "Shame", "Pride",
    "Humility", "Arrogance", "Confidence", "Doubt", "Certainty", "Ambiguity", "Clarity", "Confusion",
    "Ignorance", "Wisdom", "Foolishness", "Experience", "Inexperience", "Memory", "Forgetfulness", "Past",
    "Present", "Future", "Now", "Later", "Sooner", "Yesterday", "Tomorrow", "Today", "Perception", "Reality",
    "Illusion", "Dream", "Nightmare", "Consciousness", "Unconsciousness", "Awareness", "Ignorance", "Focus",
    "Distraction", "Attention", "Neglect", "Interest", "Disinterest", "Curiosity", "Apathy", "Creativity",
    "Routine", "Imagination", "Practicality", "Possibility", "Impossibility", "Probability", "Certainty",
    "Possession", "Loss", "Gain", "Sacrifice", "Achievement", "Failure", "Improvement", "Decline", "Growth",
    "Stagnation", "Change", "Stability", "Adventure", "Routine", "Discovery", "Familiarity", "Innovation",
    "Tradition", "Progress", "Regression", "Competition", "Cooperation", "Conflict", "Harmony", "Connection",
    "Disconnection"
];

