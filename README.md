# iCodeThis

[CLI wiki](https://cli.github.com/manual/gh_repo_create)
```sh
gh repo create iCodeThis --public
echo "# iCodeThis" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MauriceHuang/iCodeThis.git
git push -u origin main
```