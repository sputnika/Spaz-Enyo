enyo.kind({
	name: "Spaz.SettingsPopup",
	kind: "Popup",
	scrim: true,
	modal: true,
	width: "400px",
	height: "600px",
	layoutKind: "VFlexLayout",
	events: {
		onClose: ""
	},
	components: [
		{layoutKind: "HFlexLayout", components: [
			{content: "Settings"},
			{kind: "Spacer"},
			{kind: "ToolButton", icon: "source/images/icon-close.png", style: "position: relative; bottom: 7px;", onclick: "doClose"}
		]},	
		{kind: "Scroller", flex: 1, components: [ // @TODO: scroll fades.
			{kind: "Group", caption: "Columns", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Default Width"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "325px", items: [
						"200px",
						"250px",
						"300px",
						"325px",
						"350px",
						"400px",
						"450px",
						"500px"
					
					]}
				]},

			]},
			{kind: "Group", caption: "Entries", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Text Size"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "13px", items: [
						"10px",
						"11px",
						"12px",
						"13px",
						"14px",
						"15px",
						"16px",
						"17px",
						"18px",
						"19px",
						"20px"					
					]}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Embedded Image Preview"},
					{kind: "Spacer"},
					{kind: "CheckBox", onChange: "checkboxClicked"}
				]},

			]},
			{kind: "Group", caption: "Compose", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Enter Posts"},
					{kind: "Spacer"},
					{kind: "CheckBox", onChange: "checkboxClicked"}
				]},
			]},
			{kind: "Group", caption: "URL Shortening", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Service"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "bit.ly", items: [
						"bit.ly",
						"is.gd",
						"t.co"
					]}
				]},
			]},
			{kind: "Group", caption: "Image Hosting", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Service"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "twitpic", items: [
						"yfrog",
						"twitpic",
						"drippic",
						"pikchur"	
					]}
				]},
			]},
			/*{kind: "Group", caption: "Refresh", components: [
				{kind: "Item", content: "Interval"}, //list selector
				//{kind: "Item", content: "Interval for Searches"},
			]},
			{kind: "Group", caption: "Notify", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "New Entries"},
					{kind: "Spacer"},
					{kind: "CheckBox", onChange: "checkboxClicked"}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Mentions"},
					{kind: "Spacer"},
					{kind: "CheckBox", onChange: "checkboxClicked"}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Private Messages"},
					{kind: "Spacer"},
					{kind: "CheckBox", onChange: "checkboxClicked"}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Search Results"},
					{kind: "Spacer"},
					{kind: "CheckBox", onChange: "checkboxClicked"}
				]}
			]},*/
		]}
		
	],
	create: function(){
		this.inherited(arguments);
	},
	"showAtCenter": function(){
		 this.openAtCenter();
	}
});