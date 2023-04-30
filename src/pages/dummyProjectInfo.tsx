var projects:any[] = [
    {
		title:      "Realtime Chatting Website",
		tags:       ["Web Development", "react.js", "socket.io", "node.js"],
		desc:       "Built a chatroom allowing users to log in and sign up and create new chatrooms on the website",
		date:       "Sept, 2022",
		keyPoints:  ["Used React Framework for the frontend chat UI", "Used Node.js for backend and utilized socket.io library for messages transfer in real time"],
		videoLink:  "https://s3.amazonaws.com/jiayingcui.com/videos/chatroom.mov",
		githubLink: "https://github.com/Jiay0928/chat-front",
		backendLink: "https://github.com/Jiay0928/chat-backend-with-socket.io",
	},
	{
		title: "Personal Website",
		tags:  ["Web Development", "react.js", "webpack", "Typescript", "html", "css", "AWS", "AWS - s3", "AWS - Lambda", "Dynamodb", "golang"],
		date:  "Oct.- Dec., 2022",
		desc:  "Create a personal website hosted on AWS s3 bucket with Lambda backend",
		keyPoints: [
			 "Implement a golang lambda backend that interact with Dynamodb database and deployed it to AWS", 
			 "Writed a script in golang for database input and update",
        ],
		githubLink: "https://github.com/Jiay0928/personal-website",
		backendLink: "https://github.com/Jiay0928/personal-website-backend"
	},
	{
		title: "Data Graphing Website",
		tags:  ["Web Development", "react.js", "webpack", "Javascript", "html", "css", "redux", "redux-thunk", "Data Visualization"],
		desc:  "Worked with teammates to create a data analysis web application which can connect to different databases, in charge of all frontend design and coding",
		date:  "Jul.- Ang., 2022",   
		keyPoints: ["Used react, redux and apache echarts to render tables and graphs of different datasets",
			"Worked with backend RESTful API to request and receive data using redux-thunk and async functions",
			"Used webpack to handle file loading and bundling",
    ],
		videoLink:  "https://s3.amazonaws.com/jiayingcui.com/videos/bividoe.mov",
		githubLink: "https://github.com/Jiay0928/Bi_front",
	},
	{
		title:      "Simple Tiktok GoLang Backend Project",
		tags:       ["Web Development", "golang", "gorm", "backend", "mysql"],
		date:       "May - Jun.,2022",
		desc:       "Collaborated with teammates to create the backend for a simple app similar to TikTok using Golang",
		keyPoints:  ["In charge of writing APIs for videos publishing and feeding using MVC structure", "Used gorm to interact with MySQL database"],
		githubLink: "https://github.com/tanghaijun666/SimpleTikTok.git",
	},
	{
		title: "ConnectFour",
		tags:  ["Kotlin", "MVC", "animation"],
		date:  "Oct., 2022",
		desc:  "built a  ConnectFour PC game",
		keyPoints: [
			"Used JavaFx library and Animation to create the game", "Implemented MVC structure",
        ],
		videoLink:  "https://s3.amazonaws.com/jiayingcui.com/videos/pc-game.mov",
		githubLink: "https://github.com/Jiay0928/Connect-Four",
	},
	{
		title: "Data Visualization PC App",
		tags:  ["Kotlin", "MVC", "Data Visualization"],
		date:  "Sept., 2022",
		desc:  "Created a data analysis computer software using kotlin",
		keyPoints: [
			"Allow user to modify data and render different graphs", "Used Kotlin built in graphing libaray to draw graph for the dataset", "Binded data to graph using MVC structure"],
		videoLink:  "https://s3.amazonaws.com/jiayingcui.com/videos/datagraph.mov",
		githubLink: "https://github.com/Jiay0928/data-visualization-app",
	},
	{
		title: "Notes - Android App",
		tags:  ["Kotlin", "MVVM", "Android"],
		date:  "Oct.- Dec., 2022",
		desc:  "Create a notes tracking Android app using Kotlin",
		keyPoints: [
			"Allow user to create, modify, archive notes in the application", "implemented usig MVVM structure",
        ],
		videoLink:  "https://s3.amazonaws.com/jiayingcui.com/videos/notes-phoneapp.mov",
		githubLink: "https://github.com/Jiay0928/notes-android-app",
	},
	{
		title: "The Variable Elimination Algorithm",
		tags:  ["AI", "Bayesian networks", "VEA", "Numpy", "Python"],
		date:  "Sep., 2022",
		desc:  "Implement the variable elimination alogrithm to perform inference in the Bayesian networks with discrete random variables",
		keyPoints: [
			"Use Numpy Library to write normalization, restriction, sum_out, multiplication functionality for Bayesian networks Matrix",
        ],
		githubLink: "https://github.com/Jiay0928/AI-model/tree/main/vea"
	},
	{
		title: "Decision Tree",
		tags:  ["AI", "Decision Tree", "Numpy", "Python"],
		date:  "Oct., 2022",
		desc:  "Implemented a decision tree algorithm with pruning for non-discrete data",
		keyPoints: [
			"At each split point, the algorithm choose the split value with the max information gain",
			"Has two types of pruning choices -- max depth & min information gain"
        ],
		githubLink: "https://github.com/Jiay0928/AI-model/tree/main/decisionTreeWithPruning"
	},
	{
		title: "Neural Network",
		tags:  ["AI", "Neural Network", "Numpy", "Python"],
		date:  "Nov., 2022",
		desc:  "Implemented a feedforward neural network from scratch with multiple activation functions, loss functions and performance metrics",
		keyPoints: [
			"Used Numpy Library to finish the functionality of forward-passing, backward-passing and weight-updating",
			"Two loss functions: Cross entropy loss for binaray classification and mean squared error loss for regression prediction"
        ],
		githubLink: "https://github.com/Jiay0928/AI-model/tree/main/vea"
	}

]

export default projects