# How to use this

```
npm install
```
Place your file in `/images`. Change the `image_path` to your file.
```
npm start
```
Check the console.

# How to push to Github from local

You've created a project locally and would like to push it to Github.

### Create the repo
```
curl -u '149203' https://api.github.com/user/repos -d '{"name":"YOUR_FOLDER_NAME"}'
```
Enter your Github password.

### Init, add, commit, and push
```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/149203/YOUR_FOLDER_NAME.git
git push -u origin master
```