let activeTabName = null;
let activeDivName = null;
let activeBtnClass = "btn-primary";
let nonActiveBtnClass = "btn-secondary";

$(document).ready(function() {
	selectTab("newGameTab", "newGameForm");
});

document.getElementById("newGameTab").onclick = function(){
	selectTab("newGameTab", "newGameForm");
};

document.getElementById("openGameTab").onclick = function(){
	selectTab("openGameTab", "openGameForm");
};

function selectTab(tabName, divName)	{
	var tab = document.getElementById(tabName);
	if(null != activeTabName)	{
		var activeTab = document.getElementById(activeTabName);
		activeTab.classList.remove(activeBtnClass);
		activeTab.classList.add(nonActiveBtnClass);
		document.getElementById(activeDivName).style.display='none';
	}
	activeTabName = tabName;
	activeDivName = divName;
	tab.classList.remove(nonActiveBtnClass);
	tab.classList.add(activeBtnClass);
	document.getElementById(divName).style.display='block';
}