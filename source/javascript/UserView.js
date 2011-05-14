enyo.kind({
	name: "Spaz.UserView",
	kind: "VFlexBox",
	//kind: "Toaster", 
	//flyInFrom: "right",
	width: "322px",
	//height: "100%",
	//style: "background-color: #D8D8D8;",
	//flex: 1,
	published: {
		user: {}
	},
	events: {
		onDestroy: ""
	},
	components: [
		{className: "user-view", width: "322px", height: "100%", layoutKind: "VFlexLayout", components: [
			{kind: "Header", width: "322px", components: [
				{kind: "VFlexBox", className: "header", components: [
					{kind: "HFlexBox", width: "322px", components: [
						{kind: "Image", width: "75px",  height: "75px", className: "avatar"},
						{kind: "VFlexBox", height: "75px", flex: 1, components: [
							{kind: "Spacer"},
							{name: "realname", flex: 3, className: "realname truncating-text"},
							{name: "username", flex: 3, className: "link username"},
							{kind: "Spacer"}

						]},	
						{kind: "ToolButton", icon: "source/images/icon-close.png", style: "position: relative; bottom: 10px; right: 10px; float: right;", onclick: "doDestroy"}	
					]},
					{name: "bio", width: "305px", style: "padding-right: 10px", className: "small"},

				]},
			]},
			{kind: "RadioGroup", onChange: "radioButtonSelected", components: [
			    {label: "Tweets", style: "font-size: 12px"},
			    {label: "Following", style: "font-size: 12px"},
			    {label: "Followers", style: "font-size: 12px"},
			    {label: "Favorites", style: "font-size: 12px"}
			    //lists
			]},
			//{layoutKind: "HFlexLayout", pack: "center", components: [
		    {kind: "Scroller", flex: 1, className: "entry-view", components: [
				{kind: "VFlexBox", className: "header", style: "", components: [
						//{kind: "Divider", className: "divider", style: "display: none", caption: ""},
						{name: "entry", className: "entry"},
						{name: "timeFrom", className: "small", style: "padding-top: 10px"}
				]},
				//]},
				
	        ]},
	        {kind: "Toolbar", components: [
				//{kind: "GrabButton"},
				{kind: "Spacer"},
				{kind: "ToolButton", disabled: false, content: "Follow"},
				{kind: "Spacer"}
			]}
		]}
	],
	userChanged: function(){
		/*if(this.$.entry.content !== this.entry.message){
			this.$.image.setSrc(this.entry.author_avatar);
			this.$.image.applyStyle("display", "");			
			this.$.realname.setContent(this.entry.author_fullname||this.entry.author_username);
			this.$.username.setContent("@" + this.entry.author_username);
			this.$.bio.setContent(this.entry.author_description||'');
			if (this.entry._orig.source) {
				this.$.timeFrom.setContent(sch.getRelativeTime(this.entry.publish_date) + " from <span class='link'>" + this.entry._orig.source + "</span>");
			} else {
				this.$.timeFrom.setContent(sch.getRelativeTime(this.entry.publish_date));
			}
			this.$.entry.setContent(AppUtils.makeItemsClickable(this.entry.text));
		} else {
			this.doDestroy();
			//this.$.image.applyStyle("display", "none");
			//this.$.realname.setContent("");
			//this.$.username.setContent("");
			//this.$.bio.setContent("");
			//this.$.timeFrom.setContent("");
			//this.$.entry.setContent("");
		}*/
	}
});