**3D_Globe**
3D Globe with Country hover - Written using JavaScript, HTML, CSS and D3.js

**Instructions useful for running app**

**node.js**
1. Download and install node.js on system

**To download dependencies run below command in visual studio coder editor’s terminal:**
2. npm install

**Install Http server in visual studio coder editor’s terminal**
3. npm install -g http-server 

**Goto working directory in visual studio coder editor’s terminal and start HTTP server**
4. Goto working directory, where your index.html lives 
    (ex C:\Users\vrushali\git\3D_Globe\3D_Globe_With_Country_Hover>)

5. Start your http server by typing following command in terminal
    http-server -c-1

6. Goto http://localhost:8080 in any browser to run project


**Algorithm**

**Step 1:**
    Load country coordinates from .json file.
    Load country names and respective country code from .tsv file

**Step 2:**
    Load coordinates and country name with respective code in local list called country list.

**Step 3:**
    Add country id and country information such as area,population as a key value pair in custom 
    defined HashMap called country map.

**Step 4:**
    Use functionalities like rotation, scaling, mouse event handing upon hover, setting globe angles, 
    filling color on globe, dragging etc. from D3 library and render everything which shows globe.

**Step 5:**
    Call enterGlobe() or leaveGlobe() functions based on user hover interaction on globe.