function onPressed(index, menuItem, menu) {
	if (JSON.parse(menuItem.componentSubMenu).items.length == 0) {
		_menu_view.invokeItem(menuItem.componentId)
		
		if (menuItem.componentCheckable) {
			
			menuItem.componentChecked = !menuItem.componentChecked
			if (menuItem.componentChecked) {
				menuItem.ListView.view.itemChecked(index, menuItem)
			} else {
				menuItem.ListView.view.itemUnchecked(index, menuItem)
			}
			
			menuItem.itemIconPic = menuItem.iconHover
			return
		}
		_application.quit()
	}
}

function onEntered(index, menuItem, menu) {
	menu.currentMenuIndex = index	
}
