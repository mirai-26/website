const events = {

    paper: {

        title: "Tech Arena",

        description:
            "Present Your Innovation!!!" +
            "<br>" +
            "Impress expert judges with your technical depth and presentation skills. Paper must be original." +
            "<br><br>" +
            "<strong>Related Domains:</strong> AI & ML, Cybersecurity & Blockchain, Green Computing & Sustainability, Human-Computer Interaction, Robotics & Automation, Recent Trends in Technology.",

        rules: [
            "Maximum 3 members per team",
            "The paper must be original",
            "Presentation must be completed within the allotted time",
            "Use PowerPoint with a maximum of 10 slides",
            "Submit the paper in IEEE format along with the presentation"
        ],

        team: "1 - 3 Members",

        duration: "4 Minutes Presentation + 2 Minutes Q&A",

        judging:
            "Innovation | Technical Depth | Clarity | Presentation | Q&A Skills",

        submission:
            "Send your paper (IEEE format) & PPT to mirai26.aids.symposium@gmail.com"

    },


    prompt: {

        title: "Prompt Craft",

        description:
            "On-spot AI Image Generation Challenge. Craft prompts and generate the best AI images!!!",

        rules: [
            "Individual participation",
            "The theme will be provided on the spot",
            "Use only the permitted AI tool",
            "Create the image based on the given theme",
            "The generated image should be original"
        ],

        theme:
            "Provided on the spot — use AI tools to generate the most creative and accurate image. Your prompt skills will guide the AI’s imagination!",

        team: "Individual",

        duration: "20 Minutes",

        tools: "Gemini",

        judging:
            "Prompt Creativity | Relevance to Theme | Visual Appeal | Originality"

    },


    error404: {

        title: "Bug Hunt",

        description:
            "Debugging Challenge. Spot and fix errors in real code!!! No need to write from scratch, just debug like a pro.",

        rules: [
            "Individual participation",
            "Participants will be given code containing errors",
            "No need to write the program from scratch",
            "No external tools are allowed",
            "Solutions must be completed within the allotted time"
        ],

        team: "Individual",

        duration: "20 Minutes",

        language: "Python, C",

        judging:
            "Syntax Correctness | Code Logic | Time Taken | No External Tools Allowed"

    },


    aiq: {

        title: "Brain Byte",

        description:
            "AI Knowledge Quiz with MCQs to test your AI understanding and trends!!!",

        rules: [
            "Individual participation",
            "Each question carries 1 point",
            "There is no negative marking",
            "Participants must answer within the allotted time",
            "Top scorers will be awarded"
        ],

        team: "Individual",

        duration: "20 Minutes",

        topics:
            "AI Fundamentals | ML Basics | Data & Algorithms | AI Applications | Tech Trends",

        judging:
            "+1 point per correct answer | No negative marking | Top scorers will be awarded"

    },


    admad: {

        title: "Poster Creation",

        description:
            "Create an eye-catching and creative poster based on a topic revealed on the spot. Participants must design and complete their poster within the given time using their creativity and design skills.",

        rules: [
            "The topic will be announced at the beginning of the event",
            "Participants must create the poster only using Canva",
            "Pre-designed templates or content prepared before the event are not allowed",
            "The poster must be completed within 50 minutes",
            "Participants must submit their final poster before the time limit"
        ],

        team: "Individual",

        duration: "50 Minutes",

        tools: "Canva",

        judging:
            "Creativity | Relevance to the Given Topic | Visual Appeal | Originality | Effective Use of Canva | Content Presentation | Overall Design"

    },


    mute: {

        title: "Lyrics Decode",

        description:
            "English-translated lyrics of a Tamil song will be displayed. Participants must decode the clues, identify the lyrics, and find the original Tamil song within the given time.",

        rules: [
            "Individual participation",
            "English-translated lyrics will be displayed one at a time",
            "Participants must identify the corresponding Tamil song",
            "No mobile phones or internet access are allowed",
            "No external assistance is allowed"
        ],

        team: "Individual",

        duration: "20 Minutes",

        judging:
            "Correct identification of the Tamil song. The participant who identifies the highest number of songs within the given time wins. In case of a tie, the participant with the fastest completion time will be given preference."

    },


    laugh: {

        title: "Memora",

        description:
            "Watch a video carefully and observe even the smallest details. After the video ends, answer a series of questions based on what you saw and remember. Test your observation, attention to detail, and memory!",

        rules: [
            "Participants must watch the video attentively",
            "No recording or screenshots are allowed",
            "No discussion with other participants is allowed",
            "No external assistance is allowed",
            "Questions will be based only on the content shown in the video"
        ],

        team: "Individual",

        duration: "20 Minutes",

        judging:
            "Accuracy of answers. The participant with the highest number of correct answers wins. In case of a tie, the participant who completes the answers in the shortest time will be given preference."

    }

};


const modal = document.getElementById("eventModal");

const modalBody = document.getElementById("modalBody");

const buttons = document.querySelectorAll(".view-details");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const event = events[button.dataset.event];

        let rules = "";

        event.rules.forEach(rule => {

            rules += `<li>${rule}</li>`;

        });


        /* Common details */

        let content = `

            <h2>${event.title}</h2>

            <p>${event.description}</p>

            <h4>Rules</h4>

            <ul>${rules}</ul>

            <h4>Team Size</h4>

            <p>${event.team}</p>

            <h4>Duration</h4>

            <p>${event.duration}</p>

            <h4>Judging Criteria</h4>

            <p>${event.judging}</p>

        `;


        /* Event-specific details */

        if (event.submission) {

            content += `

                <h4>Submission</h4>

                <p>${event.submission}</p>

            `;

        }


        if (event.theme) {

            content += `

                <h4>Theme</h4>

                <p>${event.theme}</p>

            `;

        }


        if (event.tools) {

            content += `

                <h4>Tools Allowed</h4>

                <p>${event.tools}</p>

            `;

        }


        if (event.language) {

            content += `

                <h4>Languages</h4>

                <p>${event.language}</p>

            `;

        }


        if (event.topics) {

            content += `

                <h4>Topics</h4>

                <p>${event.topics}</p>

            `;

        }


        /* Register button */

        content += `

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGVM5dHMMHKTZk6YV5rs9KTLmdOsztU_dlioSxHLXNl2uBWQ/viewform?usp=dialog"

               class="btn btn-primary">

                Register

            </a>

        `;


        modalBody.innerHTML = content;

        modal.classList.add("active");

    });

});


document.querySelector(".close-modal").addEventListener("click", () => {

    modal.classList.remove("active");

});


window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});