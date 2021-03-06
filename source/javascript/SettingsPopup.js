enyo.kind({
	name: "Spaz.SettingsPopup",
	kind: "Spaz.Popup",
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
		{name: "scroller", kind: "FadeScroller", flex: 1, components: [ // @TODO: scroll fades.
			/*{kind: "Group", caption: "Columns", components: [
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
				]},   //@TODO: implement
			]},*/
			{kind: "Group", caption: "Entries", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Text Size"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "", preferenceProperty: "entry-text-size", rerender: true, onChange: "setPreference", items: [
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
					{content: "Tap"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "", preferenceProperty: "entry-tap", onChange: "setPreference", items: [
						{caption: "Opens Panel", value: "panel"},				
						{caption: "Opens Popup", value: "popup"}
					]}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Hold"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "", preferenceProperty: "entry-hold", onChange: "setPreference", items: [
						{caption: "Opens Panel", value: "panel"},				
						{caption: "Opens Popup", value: "popup"},
						{caption: "Does Nothing", value: "nothing"}

					]}
				]},
				/*{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Embedded Image Preview"},
					{kind: "Spacer"},
					{kind: "CheckBox", onChange: "checkboxClicked"}
				]},*/

			]},
			{kind: "Group", caption: "Compose", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Enter Posts"},
					{kind: "Spacer"},
					{kind: "CheckBox", preferenceProperty: "post-send-on-enter", onChange: "setPreference"}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: enyo._$L("Refresh After Posting")},
					{kind: "Spacer"},
					{kind: "CheckBox", preferenceProperty: "refresh-after-posting", onChange: "setPreference"}
				]}
			]},
			{kind: "Group", caption: "Refresh", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Interval"},
					{kind: "Spacer"},
					{kind: "ListSelector", value: "", preferenceProperty: "network-refreshinterval", onChange: "setRefreshPreference", items: [
						{caption:$L('Never'), value:0}, 
						{caption:$L('5min'),  value:300000}, 
						{caption:$L('10min'), value:600000},
						{caption:$L('15min'), value:900000},
						{caption:$L('30min'), value:1800000},
						{caption:$L('1hr'),   value:3600000},
						{caption:$L('2hr'),   value:7200000},
						{caption:$L('4hr'),   value:14400000},
						{caption:$L('8hr'),   value:28800000}
										
					]}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Scroll to Unread"},
					{kind: "Spacer"},
					{kind: "CheckBox", preferenceProperty: "timeline-scrollonupdate", onChange: "setPreference"}
				]},
				
				
				//{kind: "Item", content: "Interval for Searches"},
			]},
			{kind: "Group", caption: "Notify", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "New Entries"},
					{kind: "Spacer"},
					{kind: "CheckBox", preferenceProperty: "notify-newmessages", onChange: "setPreference"}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Mentions"},
					{kind: "Spacer"},
					{kind: "CheckBox", preferenceProperty: "notify-mentions", onChange: "setPreference"}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Private Messages"},
					{kind: "Spacer"},
					{kind: "CheckBox", preferenceProperty: "notify-dms", onChange: "setPreference"}
				]},
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Search Results"},
					{kind: "Spacer"},
					{kind: "CheckBox", preferenceProperty: "notify-searchresults", onChange: "setPreference"}
				]},
				
			]},
			{kind: "Group", caption: "URL Shortening", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Service"},
					{kind: "Spacer"},
					{name: "shurl", kind: "ListSelector", preferenceProperty: "url-shortener", onChange: "setPreference", items: []}
				]},
			]},
			{kind: "Group", caption: "Image Hosting", components: [
				{kind: "Item", layoutKind: "HFlexLayout", components: [
					{content: "Service"},
					{kind: "Spacer"},
					{kind: "ListSelector", preferenceProperty: "image-uploader", onChange: "setPreference", items: [
						"drippic",
						"pikchur",	
						"twitpic",
						"twitgoo",
						"identi.ca",
						"statusnet"
					]}
				]},
			]},
			/*
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
	showAtCenter: function(){
		if(this.lazy) {
			this.validateComponents();
		}
		
		this.$.scroller.setScrollTop(0);
		this.openAtCenter();
		
		this.$.shurl.setItems(new SpazShortURL().getServiceLabels());
		
		_.each(this.getComponents(), function(component){
			if(component.preferenceProperty){
				component.kind
				if(component.kind === "CheckBox"){
					component.setChecked(App.Prefs.get(component.preferenceProperty));
				} else {
					component.setValue(App.Prefs.get(component.preferenceProperty));
				}
			}
		});
	},
	setPreference: function(inSender, inValue){
		enyo.log(inSender, inValue);
		if(inSender.kind === "CheckBox"){
			App.Prefs.set(inSender.preferenceProperty, inSender.getChecked());
		} else {
			App.Prefs.set(inSender.preferenceProperty, inValue);
		}
		
		if(inSender.rerender){
			AppUI.rerenderTimelines();
		}
		
	},
	setRefreshPreference: function(inSender, inValue){
		this.setPreference(inSender, inValue);
		AppUI.restartAutoRefresher();
	}
});
