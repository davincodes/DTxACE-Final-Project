# React-Squad-08
Clone the Repo -> git clone https://github.com/elmertiman/React-Squad-08.git

if you have cloned already earlier
1. check your are in your own branch -> git branch 
2. git switch feature/[your branch] 
3. pull the updates to main branch -> git fetch origin
4. npm install --legacy-peer-deps
5. npm run build
6. run start

If it is your first time: How to Run to your local After cloning
1. cd React-Squad-08
2. npm install --legacy-peer-deps
3. npm run build
4. run start

Create a Branch 
5. git checkout -b feature/[your branch name]
* example git checkout -b feature/dareen

Swith to a Branch (if created already)
5. git swith feature/[your branch name]
* example git switch feature/dareen

6. Modify the and play with the code
7. git push origin feature/[your branch name]
** to make sure it will push only to your branch not main repo

8. Merge the branches later to main repo for submission 

NOTE: 
* the main file or homepage is main.tsx from the root directory
* For each fetch from any branch make sure to run:
    
    npm install --legacy-peer-deps
    
    thi will download any npm package used by other developers

* if get an error after issuing the command -> [ npm install --legacy-peer-deps ] just delete the "node_modules" directory and re-issue the same command ->  [ npm install --legacy-peer-deps ] to rebuild the "node_modules" direcgory

RUN in Developer Mode:
$> npm run dev

