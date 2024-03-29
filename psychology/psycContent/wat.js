const setButtons = document.querySelectorAll('.wat-set-buttons a button')
const selectAlert = document.querySelector('.select-alert')
const startHeading = document.querySelector('.start h1')
const startButton = document.querySelector('.start-button')
const watContent = document.querySelector('.wat-content')
const restart = document.querySelector('.restart')
const goToTop = document.querySelector('.go-to-top')

// Load the beep sound
const beepSound = new Audio('beep.mp3');

let watWords;

function selectedSet(setButton) {
    setButton.addEventListener('click', () => {
        const setIndex = parseInt(setButton.textContent.split(' ')[1]) - 1;
        watWords = words.slice(setIndex * 60, (setIndex + 1) * 60)
        selectAlert.style.display = 'none'
        startHeading.style.display = 'block'
        startButton.style.display = 'block'
        console.log(watWords);
        startTest(watWords)
    })
}

setButtons.forEach((setButton) => {
    selectedSet(setButton)
})


function startTest(watWords) {
    startButton.addEventListener('click', () => {
        if (watWords.length === 0) {
            alert(`Please choose a set to begin.`)
            return
        } else {
            beepSound.play();
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

    const interval = setInterval(() => {
        watIndex++
        // watIndex = (watIndex + 1) % watWords.length; // ?
        watContentWords.innerHTML = watWords[watIndex]
        if (watIndex === watWords.length) {
            watContent.style.display = 'none'
            restart.style.display = 'flex'
            console.log(watIndex, watWords.length)

            // Play beep sound when the word changes
            beepSound.play();

            goToTop.addEventListener('click', () => {
                setTimeout(() => {
                    location.reload();
                }, 0)
            })
            return
        } else {
            beepSound.play();
        }

    }, 15 * 1000)
}

const words = [
    "CAREFUL", "AGREE", "BEAUTIFUL", "CANNOT", "CONFUSE", "BAD", "CROWD", "COMPLETE", "INSTRUCTION", "CHEAT",
    "ENCOURAGEMENT", "CRY", "QUALITY", "COMPANY", "HONOUR", "DEFEAT", "REASON", "CONVERSATION", "OPPOSITION",
    "DISTURB", "SPEED", "COOPERATION", "PARENTS", "DREAM", "SURE", "FRIENDSHIP", "SYMPATHY", "FEARFUL",
    "ADVERTISEMENT", "GIVE", "TEAM", "HEIGHT", "BUSY", "HELP", "ASSERT", "HELPLESS", "ENFORCE", "TRUTH",
    "CONTRIBUTE", "HIGH", "FILMS", "UNTOUCHABILITY", "EXPLOITATION", "HINT", "ALOOF", "BLESSING", "HOLIDAY",
    "MOVEMENT", "BLUFF", "EMPLOY", "INJURED", "PRECIOUS", "BRING", "INSTRUCTOR", "LIFE", "REAL", "CLASS",
    "RANK", "LONELY", "CHOICE", "CO-EDUCATION", "CHAMPION", "DETERIORATE", "CURE", "COOPERATE", "CLEVER",
    "DISEASE", "DEMAND", "FRIEND", "COMPEL", "DOCTOR", "FOREST", "HOME", "CROWD", "EARN", "INSTRUCTION",
    "LIE", "PARTIALITY", "EXERCISE", "PATRIOTISM", "PRIDE", "GET", "TEASE", "CONSOLE",
    "HARD", "GRADUATE", "TRAITOR", "ELDERS", "HIKING", "IMAGINATION", "UNION", "NURSE", "IMPROVEMENT",
    "UNITY", "LIEUTENANT", "LATE", "LISTEN", "VULGAR", "SATISFY", "RULE", "WOMAN", "PRESIDENT", "NERVOUS",
    "DOMINATION", "ADVERSITY", "EFFORT", "CHARACTER", "RESPONSIBILITY", "DISCIPLINE", "ENCOURAGE", "BRAVE", "SUCCESS", "GREAT", "AMBITION", "DETERMINATION", "HAPPINESS", "WILLPOWER", "ACHIEVEMENT",
    "PROGRESS", "DETERMINED", "PERSISTENCE", "COMMITMENT", "PRACTICE", "DEDICATION", "LEADERSHIP", "VICTORY",
    "PERSEVERANCE", "FOCUS", "STRENGTH", "CHALLENGE", "INSPIRATION", "WINNER", "POSITIVE", "GOAL", "OPTIMISM", "BRAVERY", "BUSY", "ROMANCE", "CCURE", "FILMS", "SHOW", "DECIDE", "MOVEMENT", "SMART", "DIFFERENCE",
    "NOVEL", "SON", "INSTRUCTION", "PURCHASE", "UNION", "LESSON", "COOPERATE", "ASSIST", "MEANING", "FRIENDLY",
    "BEHAVIOUR", "PRACTICAL", "GIVE", "CLASS", "REPORT", "INTERFERENCE", "EXCEPT", "BOOK", "PLAY", "EXCUSE",
    "ADMIRE", "ABOVE", "DESIRE", "CROWD", "EXPLOITATION", "EXERCISE", "FOLLOWER", "MAJORITY", "GAME", "HONOUR",
    "CONTRIBUTION", "GET", "IMPARTIAL", "DISMISS", "HUACKING", "MOTHER", "ACTIVE", "IMPROVE", "PATRIOT", "BLOOD",
    "LATE", "PRINCIPAL", "BREAK", "NECESSITY", "PUNISH", "COMPLETE", "NOTHING", "SUPPORT", "CURSE", "PLEASURE", "BRAVERY", "LESSON", "BUSY", "COOPERATE", "ROMANCE", "ASSIST", "ADMIRE", "MOTHER", "ABOVE", "ACTIVE",
    "DESIRE", "IMPROVE", "CURE", "MEANING", "FILMS", "FRIENDLY", "SHOW", "BEHAVIOUR", "CROWD", "PATRIOT",
    "EXPLOITATION", "BLOOD", "EXERCISE", "LATE", "DECIDE", "PRACTICAL", "MOVEMENT", "GIVE", "SMART", "CLASS",
    "FOLLOWER", "PRINCIPAL", "MAJORITY", "BREAK", "GAME", "NECESSITY", "DIFFERENCE", "REPORT", "NOVEL",
    "INTERFERENCE", "SON", "EXCEPT", "HONOUR", "PUNISH", "CONTRIBUTION", "GET", "NOTHING", "INSTRUCTION",
    "BOOK", "PURCHASE", "PLAY", "UNION", "EXCUSE", "IMPARTIAL", "SUPPORT", "DISMISS", "HUACKING", "PLEASURE",
    "CURSE", "DISMISS", "ARMY", "HIDE", "SUPPORT", "CHOICE", "LETTER", "WELFARE", "EDUCATED", "MODERN", "CONSOLE", "PROBLEM",
    "PLAY", "CONTRIBUTE", "READ", "RICH", "BATCH", "REMEMBER", "ROGUE", "ACTION", "RIGHT", "THIEF", "ACTIVE",
    "SCORE", "TIDY", "CONFIDENCE", "TASK", "PUTY", "DASH", "UNIVERSITY", "EXCUSE", "DETERIORATE", "ENFORCE",
    "ADMIRE", "DIE", "MACHINE GUN", "COMMAND", "EXPECT", "MODEL", "CONVINCE", "HELPLESS", "MOVEMENT", "FUNNY",
    "UTTLE", "NOVEL", "HEADMASTER", "LOSS", "BAD", "PARTIALITY", "MOVE", "CHANGE", "PRAISE", "MUST", "CO-EDUCATION",
    "PREVENT", "NOISE", "COMPANY", "SCHOLARSHIP", "OPERATION", "DOUBT", "SELFLESS", "OVERCOME", "AMBITION", "BOARDER", "FAVOUR", "ATTACK", "ANGER", "CHILDHOOD", "HELPFUL", "COURAGE", "BLUNDER", "COMPANY",
    "HERO", "DOCTOR", "BRAVERY", "MEND", "DISLIKE", "GIVE", "OBEDIENCE", "SELFLESS", "DOWN", "FEELINGS", "CURE",
    "PATRIOTISM", "DISOBEY", "COOP", "POWER", "UNIFORM", "EFFORT", "FIGHTING", "FIND", "PICTURE", "DISPUTE",
    "NAUGHTY", "PUNISH", "BABY", "FEAR", "GOAL", "PUZZLE", "STUDY", "SHOW", "UNION", "CHARMING", "ELECTION",
    "HINT", "LATE", "QUALIFICATION", "BETTER", "SMART", "UNSOCIAL", "EXAMPLE", "CONTRIBUTION", "IRRITATE",
    "LONELY", "BOOK", "BRING", "GOVERN", "LOVE", "MAKE", "DRINK", "GOVERNOR", "LUCK", "CONSIDER", "AMICABLE", "IMPRESS", "CREATE", "DONOR", "INITIATIVE", "ROSE", "SATISFACTION", "ACTIVE", "BRAIN",
    "EXCUSE", "CONFESS", "BRIGHT", "ADOPT", "CHEERFUL", "AWARE", "ACCOMPANY", "DANGER", "ARRANGE", "FRIEND",
    "DETERMINE", "ACADEMY", "FAITH", "PHYSICAL", "ASTRONOMY", "ARROGANT", "ARTILLERY", "ASSUMPTION", "FELLOW",
    "AXE", "ABILITY", "HAPPY", "BRAVE", "ANALYSIS", "LEADER", "KILL", "ANSWER", "LIVELY", "BOLD", "PLACEMENT",
    "PERSUADE", "JUMP", "JUPITER", "SMILE", "BATTLE", "AFFECTION", "CONFIDENCE", "INFANTRY", "DEDICATE", "SUSPEND",
    "BOMBER", "COOPERATION", "CHALLENGE", "OBSTACLE", "DISLIKE", "CONVINCE", "HIGH", "ATTACHMENT", "DECISION",
    "DEFENCE"
];

console.log(words.length);
