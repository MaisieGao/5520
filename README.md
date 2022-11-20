**All expense Page:**

<img width="370" alt="Screen Shot 2022-11-20 at 1 06 39 PM" src="https://user-images.githubusercontent.com/90473308/202926340-40dd08a4-45bd-4a2d-8534-c3a094d85b2b.png">

**Important expense Page:**

<img width="373" alt="Screen Shot 2022-11-20 at 1 06 47 PM" src="https://user-images.githubusercontent.com/90473308/202926357-bcbba7af-2227-4a5d-9bb6-62a76ee3c9fb.png">

**Edit expense Page:**

<img width="384" alt="Screen Shot 2022-11-20 at 1 06 55 PM" src="https://user-images.githubusercontent.com/90473308/202926370-16ed99f0-624d-466b-9e47-b5693fb0e94c.png">

**Add expense Page:**

<img width="383" alt="Screen Shot 2022-11-20 at 1 07 07 PM" src="https://user-images.githubusercontent.com/90473308/202926379-5ed3210c-46b3-4ee8-a162-f68df8dfa47c.png">

There are 4 screens (These are still components that render other components) in this app which user can navigate to them using a nested navigation.

The first two screens are shown in a bottom tab navigator and both show a list of expense items. 

Tapping each expense item in the list (on both all and important expenses screens) navigate to Edit Expense screen. This screens show two buttons to the user, to delete an expense item, or mark it as important. An alert is shown to the user to confirm the action.

From both All Expenses and Important Expenses screens, you can navigate to Add Expenses screen by pressing on a header button. Add Expense screen shows a form to the user to add an expense item with amount and description values. 

All Pressable components have visual feedback to the user on both iOS and Android platforms.

All the actions for expenses are updated in the firebase.
