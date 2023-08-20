# cubearrays
Cube Arrays version 1.0 - STM32CubeMonitor function node for watching multiple one-dimensional arrays.

1. Download Cube Arrays v 1.0 .\cubearrays10.zip
2. Open STM32CubeMonitor, find three stripes / hamburger in up-right corner and press it to open menu → Import
3. In "Import nodes" windows select "Local" → STM32CubeMonitor_BasicFlow.json → press Import button
4. Delete "show notification", "myChart" and "Clear Graphs" nodes
5. Three stripes / hamurger → Import → Clipboard tab → "select a file to import" button → find and select cubearrays10.json → Import button
6. Connect variables node upper output to "CubeArrays v1.0" function input node
7. Double-click "CubeArrays v1.0" function node, select "On Message" tab, scroll down to const arrayNames=["arrayName1","arrayName2",...
8. Replace "arrayName1", "arrayName2" by actual array names put in quotes (case sensitive!)
9. Double-click Chart #1, write first array element count in "OR points" field
10. If you added Chart node by yourself, set "Set X-axis Label" to "custom" and enter "x"
11. Set Y-axis min and max values according to your requirements. For uint8_t it would be min: 0, max: 255
12. Configure Chart #2 and Chart 3 in the same manner
13. Double-click myProbe_Out node, select your STLink probe. If list is empty, press pencil button, select your ST-Link, write some Name, press "Add" button → "Done"
14. Double-click myProbe_In node, select your ST-Link probe → "Done"
15. Compile your project, find debug directory with ELF file
16. Double-click "myVariables" node → Pencil button near "Executable"
17. Paste ELF file folder path to "Folder" field → Press "File" drop-down list and select your project .elf file
18. Press "Expand Variable List" → write first array name in lower-right "filter" field and press "Select All" button
19. Select all elements of second and third array using same approach: write name in filter → press "Select All"
20. Write some text in "Name" field, this will enable "Add" button
21. After pressing "Add" button large arrays cause significant delay before STM32CubeMonitor user interface become responsive
22. Press Deploy button → Dashboard button → in opened window START ACQUISTION button
23. Correct chart configurations if some graphs are out of scale

Step-by-step explanatory video:
https://youtu.be/_tnx1ZxkiY8

