import React, { useState } from "react";
import Panel from "../../components/Panel";

const Home = () => {
    const panelData = [
        {
            "id" : 1,
            "category" : "today",
            "tasks" : [
                {
                    "id" : 1,
                    "text" : "Code some stuff",
                    "complete" : true
                },
                {
                    "id" : 2,
                    "text" : "Learn about react",
                    "complete" : false
                },
                {
                    "id" : 3,
                    "text": "Feed unicorn",
                    "complete" : true
                }
            ],
            "colors" : {
                "primary" : "rgb(248, 88, 88)",
                "soft" : "rgba(255, 220, 220)",
                "highlight" : "rgb(250,  237, 237)"
            }
        },
        {
            "id" : 2,
            "category" : "soon",
            "tasks" : [
                {
                    "id" : 4,
                    "text" : "Sign up for machine learning course at NOVA",
                    "complete" : false
                }
            ],
            "colors" : {
                "primary" : "rgb(193, 86, 255)",
                "soft" : "rgb(238, 220, 255)",
                "highlight" : "rgb(249, 243, 254)"
            }
        },
        {
            "id" : 3,
            "category" : "someday",
            "tasks" : [
                {
                    "id" : 5,
                    "text" : "Buy an island",
                    "complete" : false
                },
                {
                    "id" : 6,
                    "text" : "PhD in particle physics",
                    "complete" : false
                }
            ],
            "colors" : {
                "primary" : "rgb(0, 0, 0)",
                "soft" : "rgba(255, 255, 255)",
                "highlight" : "rgba(255, 255, 255)"
            }
        }
    ]

    const [panels, setPanels] = useState(panelData);

    const [nextTaskId, setNextTaskId] = useState(7);
    const nextPanelId = 4;

    const panelsList = panels.map((panel) => {
        return <Panel 
            key={panel.id} 
            category={panel.category} 
            tasks={panel.tasks}
            colors={panel.colors}
            panel={panel}
            nextTaskId={nextTaskId}
            setNextTaskId={setNextTaskId}
        />
    })

    return (   
        <div className="display-container">
            {panelsList}
        </div>
    )
}

export default Home;